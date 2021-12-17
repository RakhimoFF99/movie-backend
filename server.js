const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db/db')

const Port = process.env.PORT ||5200
app.use(bodyParser())
app.use('/api',require('./routes/categoryRoute'))
app.use('/api',require('./routes/movieRoute'))
app.use('/api',require('./routes/countryRoute'))
app.use('/api',require('./routes/imageRoute'))
app.use('/api',require('./routes/videoRoute'))

app.get('/',(req,res) => {
    res.send("Working")
})


function startServer () {
     db()
    app.listen(Port,console.log("Server started on port " + Port))

}

startServer()