const fs = require('fs'),
    express = require('express'),
    server = express(),
    cors = require('cors')

server.use(cors())

server.get('/users', (req, res) => {
    fs.readFile('data/users.json', (err, data) => {
        if (err) res.send(err)
        else {
            res.send(data)
        }
    })
})

server.listen(3000, () => {
    console.log('Server listening');
})