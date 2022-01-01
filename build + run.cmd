docker build --build-arg now="$(date)" -t galil_docker .
docker run -it -p 8088:8088 galil_docker