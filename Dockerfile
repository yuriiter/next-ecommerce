#### Server images
FROM node:20-alpine AS server_base

WORKDIR /app

COPY server/package*.json ./

RUN npm i

COPY server/ .

COPY .env* ./


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
