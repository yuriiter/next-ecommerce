#### Server images
FROM node:20-alpine AS server_base

WORKDIR /app

COPY server/package*.json ./

RUN npm i

COPY server/ .


FROM server_base as server_development

CMD ["npm", "run", "dev"]


FROM server_base as server_production

RUN npm run build

CMD ["npm", "run", "start"]


#### Client images
FROM node:20-alpine AS client_base

WORKDIR /app

COPY client/package*.json .

RUN npm i --legacy-peer-deps

COPY client/ .


FROM client_base as client_development

CMD ["npm", "run", "dev"]


FROM client_base as client_build

RUN npm run build

CMD ["npm", "run", "start"]


### NGINX
# Nginx for client and server together
FROM nginx:1.25.4-alpine as nginx

RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx
COPY --from=client_build /app/.next /usr/share/nginx/html
# COPY --from=client_build /app/out /usr/share/nginx/html


# Nginx for server only
FROM nginx:1.25.4-alpine as nginx_no-client

RUN rm /etc/nginx/nginx_server-only.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx
