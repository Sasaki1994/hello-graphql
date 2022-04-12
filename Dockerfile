FROM --platform=linux/amd64 node:16-buster

WORKDIR /usr/src

RUN mkdir client
COPY client/package.json client/yarn.lock ./client/
RUN yarn install

RUN mkdir server
COPY server/package.json server/yarn.lock ./server/
RUN yarn install

COPY . .

EXPOSE 8080
