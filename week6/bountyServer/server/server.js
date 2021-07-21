const express = require("express");
const morgan = require('morgan');

const bountyRouter = require('./bountyRouter');

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use("/bounties", bountyRouter)
app.listen(3001, () => {
    console.log("This server is running on port 3000")
})