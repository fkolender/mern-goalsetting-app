const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const {errorHandler} = require('./middleware/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes.js'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server listening on ${port}`))

