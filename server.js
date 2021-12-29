const app = require('express')();
const PORT = 5555;
const http = require('http') //include the http library into http variable
const fs = require('fs')    //for reading webpage from another html file
const path = require('path')


app.listen(
    PORT,
    () => { console.log(`\n\nit's alive on http://localhost:${PORT}`) }
)

/**
 * req: request is the incoming data.
 * res: response back to the client.
 */

// /creation - provides the time the image was built
/**
 * after creating the image, the time shown with the command - docker images - is relative to the creation date,
 * i.e. 7 minutes ago.
 * in order to give the exact time, i used the following command:
 * docker inspect -f '{{.Created}}' galil-devops  | where 'galil-devops' is my image name
 */ 
app.get('/creation', (req, res) => {
    
    fs.readFile('date.txt', function(error, data){
        if(error){
         res.writeHead(404)
         res.write('Error: File Not Found!')
     } else {
        res.writeHead(200, {'Content-Type': 'text/html' })
        res.write(data) //all the info inside date.txt file
        }
    })
})



/**
 *  dynamic parameters / value provided when the image is built
 */
app.get('/dynamic', (req, res) => {
    res.status(200 ).send({
        return: 'dynamic'
    })
})

/**
 *  provides the dockerfile the image was created with (in the image)
 */
app.get('/dockerfile', (req, res) => {
    //res.sendFile(path.join(__dirname, "Dockerfile"))
   
    fs.readFile('Dockerfile', function(error, data){
        if(error){
         res.writeHead(404)
         res.write('Error: File Not Found!')
     } else {
        res.writeHead(200, {'Content-Type': 'text/html' })
        res.write(data) //all the info inside Dockerfile
        }
    })


})


// returns the index.html file 
app.get('/', (req, res) => {
    fs.readFile('index.html', function(error, data){
        if(error){
         res.writeHead(404)
         res.write('Error: File Not Found!')
     } else {
         res.writeHead(200, {'Content-Type': 'text/html' })
         res.write(data) //all the info inside index.html
        }
    })
 })