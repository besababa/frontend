FROM node:10.5 as build-stage

COPY . /src/besababa/frontend

RUN cd /src/besababa/frontend &&\
    npm install &&\
    npm run build --prod

FROM nginx

COPY --from=build-stage /src/besababa/frontend/dist/besababa/ /var/www/
