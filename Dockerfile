FROM node:18-alpine3.15 AS deps

WORKDIR /app

COPY . /app

RUN yarn install 

RUN yarn build

CMD ["yarn", "start"]