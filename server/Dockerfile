FROM node:14 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package.lock.json .

RUN npm install -g @nestjs/cli
RUN npm install -g @nestjs/cli
RUN npm install --only=production

RUN apt-get -q update && apt-get -qy install netcat

COPY . .

RUN npm run build

CMD ["sh", "-c", "typeorm migration:run && npm start:prod"]