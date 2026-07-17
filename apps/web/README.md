# Web app

SvelteKit frontend for the monorepo.

## Role

- Own user-facing routes and UI.
- Use Svelte 5, Vite, Tailwind CSS, and SvelteKit conventions.
- Build to a Node-compatible production server through adapter-node.

## Structure

```
src/
├── routes/           # SvelteKit route tree and route-level styles
├── lib/              # shared web-only modules and assets
└── app.html         # HTML shell
vite.config.ts       # SvelteKit + Vite plugin configuration (sveltekit() call)
```

## Environment

The web app uses environment variables for runtime configuration.
Copy `apps/web/.env.example` to `apps/web/.env` to get started.

| Variable         | Required | Default               | Description                              |
| ---------------- | -------- | --------------------- | ---------------------------------------- |
| `PUBLIC_API_URL` | Yes      | `http://localhost:8000` | Base URL of the API (browser-accessible). |
| `ORIGIN`         | No       | —                     | Deployed app URL (adapter-node production). |

Environment variables prefixed with `PUBLIC_` are exposed to browser code via
`$env/static/public`. See the
[SvelteKit docs](https://svelte.dev/docs/kit/$env-static-public) for details.

## Commands

Run from `apps/web` or through pnpm workspace filters.

| Command          | Purpose                         |
| ---------------- | ------------------------------- |
| `pnpm dev`       | Start the SvelteKit dev server. |
| `pnpm build`     | Build production output.        |
| `pnpm start`     | Run built Node server.          |
| `pnpm preview`   | Preview production build.       |
| `pnpm typecheck` | Validate Svelte and TS types.   |
| `pnpm lint`      | Run ESLint.                     |
| `pnpm check`     | Run type and lint checks.       |
| `pnpm format`    | Format web files.               |

## Development notes

Keep route concerns close to their SvelteKit route. Move reusable UI or web-only helpers into `src/lib`. Keep API integration conceptual at the boundary: the web app consumes API behavior, but should not depend on API internals.
