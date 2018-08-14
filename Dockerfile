FROM node:10.5


COPY . /src/besababa/frontend

RUN apt-get update &&\
    apt-get install -y nginx

COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN cd /src/besababa/frontend &&\
    npm install &&\
    npm run build --prod &&\
    mv /src/besababa/frontend/dist/besababa/* /var/www/html/ &&\
    rm -rfv /src/besababa

CMD ["nginx", "-g", "daemon off;"]
