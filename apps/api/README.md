# API app

Express API for backend HTTP concerns in the monorepo.

## Role

- Expose API routes.
- Validate required runtime environment.
- Keep request handling, services, and middleware separated.
- Build to plain Node.js output for production.

## Structure

```
src/
├── main.ts          # process entry point and server startup
├── env.ts           # runtime environment validation
├── routes.ts        # top-level router composition
├── routes/          # route modules grouped by API concern
├── services/        # business logic used by routes
└── middlewares/     # shared request/response middleware
```

## Environment

The API validates its environment on startup. Current required variable:

- `PORT` — HTTP port for the Express server.

## Commands

Run from `apps/api` or through pnpm workspace filters.

| Command          | Purpose                        |
| ---------------- | ------------------------------ |
| `pnpm dev`       | Start TypeScript watch + API.  |
| `pnpm build`     | Compile production output.     |
| `pnpm start`     | Run compiled API.              |
| `pnpm typecheck` | Validate TypeScript types.     |
| `pnpm lint`      | Run ESLint.                    |
| `pnpm check`     | Run typecheck and lint checks. |
| `pnpm format`    | Format API files.              |

## Development notes

Keep route modules thin. Put reusable business decisions in services and shared request behavior in middleware. Validate configuration before serving traffic so runtime failures are explicit.
