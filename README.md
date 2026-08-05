# securepass

A simple passwords storage/manager. Cryptography college project.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Commands](#commands)
- [Docker](#docker)
- [Documentation](#documentation)
- [License](#license)

## About

securepass is a self-hosted password manager I built for myself. It keeps things simple: I store a credential (label, username, password) and search for it whenever I need it.

Credentials are encrypted at rest with AES-256-GCM before they're stored. Every entry gets its own random IV and authentication tag, and the encryption key lives only in my environment, never in the database.

The project is a pnpm + turbo monorepo: a web app for the UI, an API that handles credentials, and a shared database package. It grew out of a starter template I made, but now it's just this app.

## Features

- Add credentials with a label, username, and password
- Search credentials by label, decrypted on demand
- All secrets encrypted at rest with AES-256-GCM

## Requirements

- Node.js 24.x
- pnpm 11+
- Docker (for Postgres)

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the dev database:

   ```bash
   pnpm db:start
   ```

3. Configure the API. Copy the example and set your encryption key:

   ```bash
   cp apps/api/.env.example apps/api/.env
   openssl rand -base64 32   # paste the output into ENCRYPTION_KEY
   ```

   > Changing `ENCRYPTION_KEY` later makes previously stored credentials unreadable.

4. Configure the web app:

   ```bash
   cp apps/web/.env.example apps/web/.env
   ```

5. Apply migrations:

   ```bash
   pnpm db:migrate
   ```

6. Start the dev servers:

   ```bash
   pnpm dev
   ```

   The web app runs at `http://localhost:5173` and the API at `http://localhost:8000`.

## Commands

Run from the repository root.

| Command            | Purpose                             |
| ------------------ | ----------------------------------- |
| `pnpm dev`         | Start all dev servers (web + API).  |
| `pnpm build`       | Build all apps.                     |
| `pnpm start`       | Build, then run production servers. |
| `pnpm preview`     | Preview production builds.          |
| `pnpm check`       | Run typecheck and lint.             |
| `pnpm lint`        | Run ESLint.                         |
| `pnpm typecheck`   | Validate TypeScript types.          |
| `pnpm format`      | Format the workspace.               |
| `pnpm db:start`    | Start the dev Postgres container.   |
| `pnpm db:stop`     | Stop the dev Postgres container.    |
| `pnpm db:migrate`  | Run a dev migration.                |
| `pnpm db:deploy`   | Apply migrations in production.     |
| `pnpm db:generate` | Regenerate the Prisma client.       |

## Docker

Run the whole stack in production mode (db, API, and web):

```bash
pnpm docker:start
```

Or directly:

```bash
docker compose up -d --build
```

This starts:

- `db` on `http://localhost:5432` (Postgres, database `securepass`, persistent volume)
- `api` on `http://localhost:8000`
- `web` on `http://localhost:4173`

Everything is preconfigured for local use. Swap the Postgres credentials and set your own `ENCRYPTION_KEY` before exposing it anywhere. After the stack is up, apply migrations with `pnpm db:deploy`.

For development, the standalone database compose file lives in `packages/db` and uses a separate `securepass-dev` database:

```bash
pnpm db:start
```

## Documentation

- [Architecture](ARCHITECTURE.md)
- [Web app](apps/web/README.md)
- [API app](apps/api/README.md)

## License

This project is licensed under the [MIT License](LICENSE).
