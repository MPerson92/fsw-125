const express = require("express")
const morgan = require('morgan')

const fruitRouter = require('./fruitRouter')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use("/inventoryItems", fruitRouter)
app.listen(3000, () => {
    console.log("This server is running on port 3000")
})
