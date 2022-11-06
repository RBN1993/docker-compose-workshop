FROM node:14.19.1-alpine3.14
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --production
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
USER node