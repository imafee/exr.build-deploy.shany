FROM node:lts-alpine as build
RUN echo "构建静态资源阶段"

WORKDIR /code
# COPY . /code
# RUN npm ci && npm run build
# 构建过程拆分为更多层，重新构建时就可以复用缓存来加快速度
ADD package.json package-lock.json /code/
RUN npm ci

ADD public /code/public
ADD src /code/src
RUN npm run build

FROM nginx:alpine
RUN echo "构建镜像阶段"
COPY --from=build code/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf