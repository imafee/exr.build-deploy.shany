## 构建阶段：生成构建产物
FROM node:lts-alpine as build
RUN echo "构建阶段"
WORKDIR /code
COPY . .
RUN npm ci

## 部署阶段：构建运行时环境
FROM node:lts-alpine as deploy
RUN echo "部署阶段"
WORKDIR /app
COPY --from=build /code/*.html  /app/
COPY --from=build /code/package.json  /app/
COPY --from=build /code/node_modules/  /app/node_modules/

# 启动服务
# EXPOSE 3000
# CMD npm start