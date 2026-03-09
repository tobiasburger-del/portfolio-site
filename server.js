const express = require('express');
const app = express()
app.use(express.static('public'))

app.get('/home', (req, res) => {
    res.status(200).sendFile(__dirname +'/public/index.html');
} )

app.get('/projects', (req, res) => {
    res.status(200).sendFile(__dirname +'/public/projects.html');
} )

app.get('/projects/:id', (req, res) => {
   const id = req.params.id
    if (id == 1) {
        res.sendFile(__dirname+'/public/project1.html')
    } else if (id == 2) {
        res.sendFile(__dirname+'/public/project2.html')
    } else if (id == 3) {
        res.sendFile(__dirname+'/public/project3.html')
    }
})

app.get('/contact', (req, res) => {
    res.status(200).sendFile(__dirname +'/public/contact.html');
} )

app.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});