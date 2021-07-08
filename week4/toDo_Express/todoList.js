const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const morgan = require('morgan')
app.use(morgan('dev'))


app.use("/toDos", require('./todoRouter'))
app.listen(3000, () => {
    console.log("This server is running on port 3000")
})