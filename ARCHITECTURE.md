# Architecture

> See [README](./README.md) for setup and usage instructions.

## Workspace shape

```
.
├── apps
│   ├── api
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   └── web
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts        # SvelteKit config passed to sveltekit() plugin
│       └── src/
├── packages
│   ├── eslint-config
│   └── prettier-config
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── setup.sh
```

## Boundaries

| Scope        | Ownership                                         |
| ------------ | ------------------------------------------------- |
| `apps/web`   | UI, routing, assets, web config                   |
| `apps/api`   | HTTP, routing, validation, services, middleware   |
| `packages/*` | Dev config only                                   |
| Root         | Workspace orchestration, Docker, cross-app checks |

## Common commands

Run commands from the repository root.

> `pnpm dev` starts the web app on `http://localhost:5173` and the API on `http://localhost:8000` with hot reload.

| Command                | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `pnpm install`         | Install workspace dependencies.              |
| `pnpm dev`             | Start all dev servers via Turbo.             |
| `pnpm build`           | Build all apps.                              |
| `pnpm start`           | Build, then start production.                |
| `pnpm check`           | Run type and lint checks.                    |
| `pnpm format`          | Format the workspace.                        |
| `docker compose up -d` | Build and run Docker services in production. |

## Runtime & build

- Web and API run as separate Node processes
- Web uses SvelteKit adapter-node; API runs compiled Express
- Docker Compose starts services independently with port exposure
- Turbo coordinates workspace tasks with isolated app builds
- Configuration lives near consuming runtime; root config limited to orchestration

## Development model

The root workspace owns orchestration, dependency management, and shared quality gates. Each app owns its runtime concerns and exposes the same core lifecycle: develop, build, start, and check.

Precommit hooks via husky + lint-staged enforce formatting and checks before each commit.

Keep app-specific decisions inside the relevant app. Move reusable developer tooling into `packages/*`.
