FROM node:0.10.30

RUN mkdir /code
WORKDIR /code

run npm install -g pm2

EXPOSE 1080