# Morent

Morent is a dockerized full-stack car-rental application built with Next.js, Express.js, MongoDB, and nginx. It is written in TypeScript and features authorization with JWT, client-side rendering, and validation using Zod. The application is designed to be responsive, ensuring usability on both mobile and desktop devices. With Docker-compose, Morent can be easily deployed for development and production environments.

## Development

To run Morent in a development environment, use the following commands:

```bash
docker-compose -f docker-compose.development.yaml build
docker-compose -f docker-compose.development.yaml up
```

## Production

For production deployment, follow these steps:

1. **Domain Configuration**: Ensure you have a domain name bound to your server's IP address.

2. **Modify Environment Variables**: Update the `.env` files, specifically `FRONTEND_URL` and `NEXT_PUBLIC_BACKEND_URL`, with your domain name.

3. **Run The Server**: Execute the following command to initialize the application:

```bash
sudo docker-compose -f docker-compose.production.yaml up -d
```

4. **Obtain SSL Certificate**: Run the Certbot command to obtain an SSL certificate for your domain. Replace `[your_domain.com]` with your actual domain name:

```bash
sudo docker-compose -f docker-compose.production.yaml run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d [your_domain.com]
```

5. **Update Nginx Configuration**: Uncomment the second server block in `nginx/nginx.conf` to enable HTTPS. This ensures that Nginx serves your application securely over HTTPS.

6. **Restart Docker App**: After updating the Nginx configuration, restart the Docker app to apply the changes:

```bash
sudo docker-compose -f docker-compose.production.yaml restart
```

## Demo User Credentials

To access the demo features of Morent, you can use the following credentials:

- **Email:** demo@morent.com
- **Password:** Aa123456

## Notes

- The Cars data in Morent is entirely mockup and does not represent real data.
- Forms, except for sign-in and sign-up, are also mockup and are not sent anywhere.
- Configuration settings can be modified by updating the `.env` files. Additionally, nginx configuration (`nginx/nginx.conf`) can also be changed for production.
