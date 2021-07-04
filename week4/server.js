const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const { uuid } = require('uuidv4');

const PORT = 3000;

app.use(express.json())

let bounties = [];

app.get('/bounties', (req, res) => {
    res.send(bounties)
});

app.post('/bounties', (req, res) => {
    let newBounties = req.body;
    newBounties._id = uuidv4();
    newBounties.firstName = req.body.firstName;
    newBounties.lastName = req.body.lastName;
    newBounties.living = req.body.living;
    newBounties.bountyAmount = req.body.bountyAmount;
    newBounties.type = req.body.type;
    bounties.push(newBounties);

    console.log(bounties);
})

app.delete('/bounties', (req, res) => {
   const bountiesId = req.params.bountiesId;
   const bountyIndex = bounties.findIndex(bounty => bounty._id === bountiesId)
   bounties.splice != uuidv4();

    res.send('bounty succesfully deleted!')
})

// app.put()

app.listen(PORT, () => {
    console.log(`app started on port: ${PORT}`)
})