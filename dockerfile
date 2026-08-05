# syntax=docker/dockerfile:1.7

FROM node:24-slim AS base

RUN apt-get update && apt-get install -y wget openssl --no-install-recommends && rm -rf /var/lib/apt/lists/*

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV="production"

RUN corepack enable && corepack prepare pnpm@11.10.0 --activate

WORKDIR /usr/src/app

FROM base AS api

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm --filter @packages/db db:generate
RUN pnpm --filter api build

USER node
EXPOSE 8000
CMD ["node", "apps/api/build/main.js"]

FROM base AS web

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm --filter @packages/db db:generate
RUN pnpm --filter web build

USER node
EXPOSE 4173
CMD ["node", "apps/web/build"]
