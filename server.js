const express = require('express')
const cors = require('cors')
const app = express()

const corsOptions = {
    // origin: ['http://example.com', 'https://www.w3schools.com', 'http://localhost:4200'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// middle ware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(require('./controller'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    const env = `${process.env.NODE_ENV || 'development'}`
    console.log(`App listening on port ${PORT}`)
    console.log(`App listening on env ${env}`)
    console.log(`Press Ctrl+C to quit.`)
    
})