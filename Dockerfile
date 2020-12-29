FROM node:14

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

COPY ormconfig.docker.json ./ormconfig.json

EXPOSE 3000

CMD ["npm", "start"]

