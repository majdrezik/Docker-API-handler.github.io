FROM node:alpine 
ARG now
ENV DATE=$now
COPY . /app
WORKDIR /app
RUN date > date.txt
RUN export now="$(date)"
#RUN date > config.env
CMD node server.js 