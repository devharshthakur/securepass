# SvelteKit + Express Monorepo Starter Template

This is a full-stack `sveltekit` + `express` monorepo starter template. It is lean, simple and contains only the minimum setup required to just start with it.

## Why

For any full stack projects, people usually go for a monorepo setup, myself included. Setting up a monorepo is a tedious task every time. People make their template as an individual repo on their personal github so they can clone it and get started with it (same as what I am doing here but with a small twist). So what I am doing differently is intentionally providing a leaner template with minimum config applied (lint, format, check, precommit hooks with lint-staged, some sveltekit scripts useful).

This repo is extensible to any extent, I am sure the config applied here will not need to change as you build on top of it (which is what I recommend — stick with the defaults provided here as it is stable and it works).

> [!IMPORTANT]
> This template assumes the presence of bash shell or any shell where you can run bash scripts.

## Requirements

- Node.js 24.x (LTS) or any node version manager, I recommend `fnm` or `nvm`
- `pnpm` as package manager as it just works and is stable

## Usage

1. Clone the repo

```bash
git clone https://github.com/devharshthakur/sveltekit-express-monorepo.git
```

2. Then run `setup.sh`

```bash
bash setup.sh
```

3. Install deps using `pnpm`

```bash
pnpm install
```

## Docker

This template comes with a `docker-compose.yml` to run both services in production:

```bash
docker compose up -d
```

This starts the API on `http://localhost:8000` and the web app on `http://localhost:4173`.

## Documentation

- [Web app](apps/web/README.md)
- [API app](apps/api/README.md)
- [Architecture](ARCHITECTURE.md)

## Other Templates by me

1. [typescript-express-starter](https://github.com/devharshthakur/typescript-express-starter.git)
2. [fastapi-starter](https://github.com/devharshthakur/fastapi-starter-template.git)

## Announcement

I have been keeping an eye on [viteplus(`vp`)](https://viteplus.dev/) and [nub](https://nubjs.com/). When they are stable, this project will migrate to those technologies.

## License

This project is under [MIT](./LICENSE) license.
