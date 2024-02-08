FROM node:21.6.1

WORKDIR /app

COPY ./package*.json /app

RUN npm install 

COPY . .

EXPOSE 3001

CMD ["npm", "start"]

