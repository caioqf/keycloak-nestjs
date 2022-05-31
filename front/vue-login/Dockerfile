FROM node:14-alpine3.14 as development

WORKDIR /home/node/front

RUN apk update

COPY . .

RUN npm install