FROM node:14

WORKDIR /src
COPY . .
RUN yarn && yarn build

EXPOSE 3000
CMD node server.js
