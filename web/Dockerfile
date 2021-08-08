FROM node:14 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package.lock.json .

RUN npm install

COPY . .

RUN npm build

CMD ["npm", "run start:prod"]