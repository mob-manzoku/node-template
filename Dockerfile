FROM node:0.10.30

RUN mkdir /code
WORKDIR /code

ADD . /code

run npm install

EXPOSE 80 1080
