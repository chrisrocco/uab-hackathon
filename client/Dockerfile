FROM nginx:alpine
RUN apk add --update nodejs

COPY default.conf /etc/nginx/conf.d/default.conf

COPY package*.json ./
RUN npm install

COPY . /usr/share/nginx/html/