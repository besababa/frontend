# Build stage
FROM node:10.5 as build-stage
COPY . /src/besababa/frontend
RUN cd /src/besababa/frontend &&\
    npm install &&\
    npm run build --prod

# Actual image
FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /src/besababa/frontend/dist/besababa/ /var/www/html
