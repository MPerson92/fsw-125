const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let bounties = [];

bountyRouter.route("/")

.get((req, res) => {
    res.send(bounties)
})

.post((req, res) => {
    let newBounties = req.body;
    newBounties._id = uuidv4();
    newBounties.firstName = req.body.firstName;
    newBounties.lastName = req.body.lastName;
    newBounties.living = req.body.living;
    newBounties.bountyAmount = req.body.bountyAmount;
    newBounties.type = req.body.type;
    bounties.push(newBounties);

    console.log(bounties);
    res.send('post succesfully')
})


bountyRouter.route('/:bountyId')

.get((req, res) => {
    const bountyId = req.params.bountyId;
    const singleBounty = bounties.find(bounties => bounties._id === bountyId);

    res.send(singleBounty);
})

.delete((req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounties => bounties._id === bountyId)
    bounties.splice(bountyIndex, 1);
 
     res.send('bounty succesfully deleted!')
})

.put((req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounties => bounties._id === bountyId)
    Object.assign(bounties[bountyIndex], req.body);

    res.send("Resource has been successfully updated to");
})


 
module.exports = bountyRouter;