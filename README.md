# Docker-simple-API-handler
A docker that runs a node.js server handling simple API requests.
     
   1) `/           -   returns an index.html file with available APIs to use.`
   2) `/dynamic    -   a dynamic parameter / value provided when the image is built.`
   3) `/dockerfile -   provides the dockerfile the image was created with (in the image).`
   4) `/creation   -   provides the time the image was built.` 
   
   
## Running the Application
 
 ### pull the project to your machine via Terminal (or cmd):
  - `docker pull majdrezik/simple-api-handler` 
  -  Link to my DockerHub: https://hub.docker.com/r/majdrezik/simple-api-handler
  
 ### After you have the image on your machine, on the Terminal, run the container via:
 - `docker run -it -p 8088:8088 majdrezik/simple-api-handler`
 - `open your browser and go to localhost:8088`

## Stopping the Application

 ### After you're done with running the app, you can stop the container via the following steps:
- Open a new terminal window. (Or a new CMD if you're working with CMD).
- Type:
`docker ps`
- You will see the information about the running containers. COPY the {CONTAINER ID} value (i.e. d8af1bf893d4)
- Type the following command:
`docker container stop CONTAINER_ID` where CONTAINER_ID is the value you've copied.

   
    
#     
 ### Take a look at the Collection on Postman
 - https://www.getpostman.com/collections/34d6ec329f993bd20f51
   
#   
![image](https://user-images.githubusercontent.com/39953455/147858936-a808abc5-4f17-429f-a60f-dd261019d449.png)


