const express = require('express')
const app = express()
const PORT = require('./config')


app.get('/', (request,response) => {
    response.end('Home Page')
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});