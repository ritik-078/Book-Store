const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {PORT, mongoURL} = require('./config')


app.get('/', (request,response) => {
    response.end('Home Page')
})

mongoose.connect(mongoURL)
    .then(() => {
        console.log("Connected to Database")
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        });
    })
    .catch((err) => {
        console.log(err)
    })