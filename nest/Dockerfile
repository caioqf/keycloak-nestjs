FROM node:14.15.4-alpine3.12

WORKDIR /home/node/app

RUN apk update

COPY . .

RUN npm install -g @nestjs/cli@8.0.0


RUN npm install

