FROM node:lts-alpine as build
RUN echo "构建静态资源阶段"
WORKDIR /code
COPY . /code
RUN npm ci && npm run build

FROM nginx:alpine
RUN echo "构建镜像阶段"
WORKDIR /app
COPY --from=build code/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf