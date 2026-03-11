FROM node:24-alpine

WORKDIR /app

COPY package.json . 

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

ARG GIT_COMMIT_SHA

ENV GIT_COMMIT=${GIT_COMMIT_SHA}

CMD ["node", "app.js"]
