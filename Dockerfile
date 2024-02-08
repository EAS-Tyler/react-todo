FROM nginx:1.25.3

WORKDIR /app

COPY ./package*.json /app

RUN npm install 

COPY . .

EXPOSE 3001

CMD ["npm", "start"]

