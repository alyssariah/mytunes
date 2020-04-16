const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const parser = require('body-parser')
const cors = require('cors')

app.use(parser.json())
app.use(cors())

const favoriteRouter = require('.routes/favorites')

app.use('/favorites', favoriteRouter)

app.listen(PORT, ()=> {"I am conntected on port: ", PORT})
