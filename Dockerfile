FROM node 

ENV NODE_ENV=development

WORKDIR /usr/src

COPY package*.json .

RUN yarn install

COPY . .

CMD ["sh", "-c", "yarn start"]