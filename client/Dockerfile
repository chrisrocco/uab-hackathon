FROM nginx:alpine
RUN apk add --update nodejs

COPY default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html/

COPY package*.json ./
RUN npm install

COPY . .