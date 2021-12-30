FROM node:alpine 
COPY . /app
WORKDIR /app
#TEST
RUN date > date.txt
CMD node server.js
