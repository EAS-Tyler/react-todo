FROM node:21.6.1

WORKDIR /app

COPY ./package*.json /app

RUN npm install 

COPY ./app.js .

CMD ["node", "app.js"]