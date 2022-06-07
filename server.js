//load express
const express = require('express')

//create the app (an instance of express)
const app = express();
const PORT = 4500

const magicData = require('./models/eightBall')
const magic = magicData

//setup view engine
app.set('view engine', "ejs")
app.set('views', "./views")

//Root Route
app.get('/', (req, res) => {
    res.send("Root route created!")
})

//Greeting Route
app.get('/greeting', (req, res) => {
    res.send(`Hello! stranger.`)
})

//Greeting by name
app.get('/greeting/:name', (req, res) => {
    console.log(req.params)
    const name = req.params
    res.send(`Hello, ${name.name}! It's great to see you!`)
})

//Tip calculator
app.get('/tip', (req, res) => {
    res.send(`Tip Calculator`)
})

//Tip by percentage
app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params)
    const total = Number(req.params.total)
    const tipPercentage = Number(req.params.tipPercentage)

   res.send(`Items ordered.......$${total}   <br> Tip ${tipPercentage}%  ................$${(tipPercentage * total / 100)}  <br> Grand total...........$${( total + (tipPercentage * total / 100))}`) 
})

//Magic ball
app.get('/magic', (req, res) => {
    res.send(`Copy and paste the next phrase in the URL:<br>
    <h3> http://localhost:4500/magic/Will%20I%20Be%20A%20Millionaire <h3/>   `)
})
 
//Magic ball assorted answer 
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    const question = req.params
    const result = magic[(Math.floor(Math.random()*20 + 1 ))]
    console.log(result)
    console.log(question);
    res.send(`${`Will I be a millioner`}? ${result}`)
})





// app Listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})