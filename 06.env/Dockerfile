FROM node:lts-alpine as build
ARG OSS_SECRET_KEY # docker-compose的args传入的参数声明
ARG CDN_SECRET_KEY
ARG PUBLIC_URL

WORKDIR /app
ADD package.json /app/
ADD *.js /app/

RUN echo "=========="
RUN echo $OSS_SECRET_KEY
RUN echo $CDN_SECRET_KEY
RUN echo $PUBLIC_URL
RUN echo "=========="