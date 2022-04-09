FROM node:16-buster

WORKDIR /usr/src/app

COPY client/package.json client/yarn.lock ./client
RUN yarn install

COPY server/package.json server/yarn.lock ./server
RUN yarn install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]