#!/usr/bin/env bash
# check.sh — report outdated dependencies for the root project and every
# workspace project under packages/ and apps/.
#
# Usage:
#   ./scripts/check.sh           report only (never prompts, exits 0)
#   ./scripts/check.sh --update  ask approval per project, then update
#
# TypeScript is always installed as typescript@^6 during updates: the TS 7
# native rewrite has no API support in typescript-eslint yet, so 7.x must
# never be installed. Informational only: always exits 0.

set -euo pipefail

update=0
case "${1:-}" in
  --update) update=1 ;;
  "") ;;
  *)
    echo "usage: $0 [--update]" >&2
    exit 1
    ;;
esac

cd "$(dirname "${BASH_SOURCE[0]}")/.."

projects=("." packages/*/ apps/*/)

total=0
outdated=0
updated=0

for project in "${projects[@]}"; do
  [[ -f "$project/package.json" ]] || continue
  total=$((total + 1))

  if [[ "$project" == "." ]]; then
    label="root"
  else
    label="${project%/}"
  fi

  echo
  echo "===== $label ====="

  # pnpm outdated exits 1 when updates exist, 0 when up to date.
  if (cd "$project" && pnpm outdated); then
    echo "(up to date)"
    continue
  else
    # $? inside else is the if-condition's exit code, not the if's (which
    # would be 0 when no branch ran).
    code=$?
    if ((code != 1)); then
      echo "error: pnpm outdated failed in $label (exit $code)" >&2
      continue
    fi
  fi

  outdated=$((outdated + 1))

  if ((update == 0)); then
    continue
  fi

  # Build update specs from --json. typescript is always pinned to 6.x.
  specs="$(cd "$project" && pnpm outdated --json 2>/dev/null | node -e '
    let s = "";
    process.stdin.on("data", (d) => (s += d));
    process.stdin.on("end", () => {
      const data = JSON.parse(s);
      process.stdout.write(
        Object.keys(data)
          .map((name) => (name === "typescript" ? "typescript@^6" : name))
          .join(" "),
      );
    });
  ' || true)"

  if [[ -z "$specs" ]]; then
    echo "error: could not read outdated list for $label" >&2
    continue
  fi

  read -r -p "Update in $label ($specs)? [y/N] " answer || answer="n"
  case "$answer" in
    [yY] | [yY][eE][sS])
      # $specs is intentionally word-split into pnpm arguments.
      if (cd "$project" && pnpm update $specs); then
        updated=$((updated + 1))
      else
        echo "error: pnpm update failed in $label" >&2
      fi
      ;;
    *)
      echo "skipped $label"
      ;;
  esac
done

echo
echo "Summary: outdated deps found in $outdated of $total projects (updated $updated)"
exit 0
