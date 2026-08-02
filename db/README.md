# Database

Docker Compose configuration for the local PostgreSQL database.

## Requirements

- Docker with Docker Compose
- Repository dependencies installed with `pnpm install`

## Start database

From repository root:

```bash
pnpm db:start
```

Or run Docker Compose directly:

```bash
docker compose -f db/docker-compose.yml up -d
```

PostgreSQL is available at `localhost:5432` with these development credentials:

| Setting  | Value        |
| -------- | ------------ |
| Host     | `localhost`  |
| Port     | `5432`       |
| User     | `postgres`   |
| Password | `postgres`   |
| Database | `securepass` |

## Stop database

```bash
pnpm db:stop
```

The `securepass-pgdata` Docker volume persists database data between container restarts.

## Database commands

Generate the database client:

```bash
pnpm db:generate
```

Run migrations:

```bash
pnpm db:migrate
```

Deploy migrations:

```bash
pnpm db:deploy
```
