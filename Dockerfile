FROM node:0.10.30

RUN mkdir /code
WORKDIR /code

EXPOSE 1080

RUN npm install -g pm2

ADD package.json /code/package.json
RUN npm install

ADD . /code