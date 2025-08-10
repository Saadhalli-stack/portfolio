
FROM node:18-alpine3.18 AS build


RUN apk update && apk add --no-cache bash


WORKDIR /app


COPY package*.json ./
RUN npm install --legacy-peer-deps


COPY . .


RUN npm run build


FROM nginx:alpine


COPY --from=build /app/build /usr/share/nginx/html


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
