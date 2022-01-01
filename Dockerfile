FROM node:alpine 
ARG now
ENV DATE=$now
COPY . /app
WORKDIR /app
RUN date > date.txt
RUN export now="$(date)"
CMD node server.js 