FROM node:alpine 
COPY . /app
WORKDIR /app
RUN date > date.txt
RUN cat date.txt
CMD node server.js
