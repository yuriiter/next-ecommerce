# Morent

Morent is a dockerized full-stack car-rental application built with Next.js, Express.js, MongoDB, and nginx. It is written in TypeScript and features authorization with JWT, client-side rendering, and validation using Zod. The application is designed to be responsive, ensuring usability on both mobile and desktop devices. With Docker-compose, Morent can be easily deployed for development and production environments.

## Development

To run Morent in a development environment, use the following commands:

```bash
docker-compose -f docker-compose.development.yaml build
docker-compose -f docker-compose.development.yaml up
```


## Production

For production deployment, use the following commands:


```bash
docker-compose -f docker-compose.production.yaml build
docker-compose -f docker-compose.production.yaml up -d
```


## Demo User Credentials

To access the demo features of Morent, you can use the following credentials:

- **Email:** demo@morent.com
- **Password:** Aa123456

## Notes

- The Cars data in Morent is entirely mockup and does not represent real data.
- Forms, except for sign-in and sign-up, are also mockup and are not sent anywhere.
- Configuration settings can be modified by updating the `.env` files. Additionally, nginx configuration (`nginx/nginx.conf`) can also be changed for production.

