FROM node:23-alpine AS build

WORKDIR /app
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install --force

COPY . .

ENV APP_DEBUG='production'
ENV APP_NAME='cv-abelgasque'
ENV APP_VERSION='1.0.0'
ENV APP_AVATAR_IMG='https://github.com/abelgasque.png'

RUN npm run build-prod
RUN ng build --configuration=production

FROM nginx:alpine AS runtime
EXPOSE 80
COPY --from=build /app/dist /usr/share/nginx/html