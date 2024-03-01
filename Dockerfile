FROM node:current-alpine3.18 AS builder

WORKDIR /app

COPY . ./

RUN npm i

RUN npm --prefix ./server i

RUN npm run dev && npm --prefix ./server dev

FROM nginx:alpine

COPY --from=builder /app/frontend/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
