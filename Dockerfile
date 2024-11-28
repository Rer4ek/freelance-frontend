FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm i @rollup/rollup-linux-x64-musl

EXPOSE 3000

CMD ["npm", "run", "dev"]