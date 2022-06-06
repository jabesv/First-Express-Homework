//load express
const express = require('express')

//create the app (an instance of express)
const app = express();
const PORT = 4500

//Routes
app.get('/', (req, res) => {
    res.send("Root route created!")
})

app.get('/greeting', (req, res) => {
    res.send(`Hello! stranger.`)
})
app.get('/greeting/:name', (req, res) => {
    console.log(req.params)
    const name = req.params
    res.send(`Hello, ${name.name}! It's great to see you!`)
})







// app Listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})