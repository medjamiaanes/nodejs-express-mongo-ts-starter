FROM node:12.4-alpine

WORKDIR /usr/src/workdir_name

COPY package*.json ./

RUN yarn install

COPY . .

ENV TZ=Africa/Algiers
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN yarn build:js

EXPOSE 80

CMD ["node", "./build/main.js"]