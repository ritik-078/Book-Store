require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {PORT, mongoDBURL} = require('./config')
const {bookRouter} = require('./routes/bookRoutes')
const cors = require('cors') 

app.use(express.json())
app.use(cors())

// app.use(cors(
//     {
//         origin : 'http://localhost:5000',
//         methods : ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders : ['Content-type']
//     } 
// ))
app.get('/', (request,response) => {
    return response.status(200).send('Home Page')
})

app.use('/books',bookRouter)

// Connect to MongoDB database
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to Database")
        
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        });
    }) 
    .catch((err) => {
        console.log(err)
    }) 