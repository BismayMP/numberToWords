FROM node:14 as base

ENV NODE_MAX_MEM=8192

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm build

EXPOSE 8080

CMD [ "npm", "start" ]

