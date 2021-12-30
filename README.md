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
     
     ENJOY!
  
  ![image](https://user-images.githubusercontent.com/39953455/147714040-96fd3d49-e069-402f-b798-ea0f335eb329.png)

