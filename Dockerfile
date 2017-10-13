FROM node
EXPOSE 3000
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm start