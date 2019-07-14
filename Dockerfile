FROM node:8

EXPOSE 3000
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN apt-get install -y python gcc g++ make

# Install eslint
RUN npm install -g eslint typescript node-gyp

RUN npm install
RUN npm run build
# RUN npm start


# Set the default shell to bash instead of sh
ENV SHELL /bin/bash