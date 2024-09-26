# Dockerfile for Node.js server

FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm install passport@0.5.2
RUN npm install passport-jwt@4.0.0
COPY . .


EXPOSE 3001


CMD ["npm", "start"]
