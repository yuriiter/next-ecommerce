FROM node:20-alpine3.18 AS next_app

WORKDIR /app

COPY . ./

RUN npm i

CMD ["npm", "run", "next:build", "&&", "npm", "run", "next:export"]
