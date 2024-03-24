This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
docker-compose -f docker-compose.development.yaml --env-file ./server/.env build
docker-compose -f docker-compose.development.yaml --env-file ./server/.env up
```

Run production:

```bash
docker-compose -f docker-compose.production.yaml --env-file ./server/.env build
docker-compose -f docker-compose.production.yaml --env-file ./server/.env up
```

Stop docker container:

```bash
docker-compose -f <compose-file>.yaml down
```

Remove all images and containers of the project:

```bash
docker-compose -f <compose-file>.yaml down
docker container prune -f
docker image prune -af
```
