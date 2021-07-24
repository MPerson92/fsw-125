const express = require("express");
const morgan = require('morgan');

const starRouter = require('./starRouter');

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use("/stars", starRouter)

app.use((err, req, res, next) => {
    res.send({errMsg: err.message})
});

app.listen(3001, () => {
    console.log("This server is running on port 3000")
})