FROM node:21.6.1 as build

WORKDIR /app

COPY ./package*.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM nginx:1.25.3

COPY --from=build /app/build /usr/share/nginx/html

# COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


