FROM node:alpine 
COPY . /app
WORKDIR /app
RUN date > date.txt
CMD node server.js
