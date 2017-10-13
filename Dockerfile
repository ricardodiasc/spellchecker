FROM node

EXPOSE 3000
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm set config proxy http://10.0.100.235
RUN npm set config https-proxy http://10.0.100.235
RUN npm set config strict-ssl false

RUN npm install
RUN npm run build
RUN npm start