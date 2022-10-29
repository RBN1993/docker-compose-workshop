FROM node:14.19.1-alpine3.14 as builder
RUN mkdir /ng-app
WORKDIR /ng-app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build -- ---output-path=dist

FROM nginxinc/nginx-unprivileged:1.23
USER root
RUN rm -rf /usr/share/nginx/html/*
COPY nginx/default.conf /etc/nginx/conf.d/
COPY --from=builder /ng-app/dist /usr/share/nginx/html
USER nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]