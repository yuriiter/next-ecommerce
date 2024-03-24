FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm i --legacy-peer-deps

COPY . .


FROM base as development

CMD ["npm", "run", "dev"]


FROM base as production

CMD ["npm", "run", "build"]
