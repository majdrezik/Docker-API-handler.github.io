const app = require('express')();
const PORT = 8088;
const http = require('http') //include the http library into http variable
const fs = require('fs')    //for reading webpage from another html file
const path = require('path')


app.listen(
    PORT,
    () => { console.log(`\n\nit's alive on http://localhost:${PORT}`) }
)


// /creation - provides the time the image was built 
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