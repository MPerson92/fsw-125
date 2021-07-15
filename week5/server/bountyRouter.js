const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let bounties = 
[
    {
       "firstName": "Mike",
       "lastName": "Zword",
       "living": "false",
       "bountyAmount": "3,000,000",
       "type": "Sith",
       "_id": uuidv4() 
    },
    {
        "firstName": "Zach",
        "lastName": "Hostess",
        "living": "true",
        "bountyAmount": "50,000,000",
        "type": "Jedi",
        "_id": uuidv4()
    },
    {
        "firstName": "Charlotte",
        "lastName": "Bulb",
        "living": "false",
        "bountyAmount": "6,000,000",
        "type": "Sith",
        "_id": uuidv4() 
    },
    {
        "firstName": "Lemonious",
        "lastName": "Caps",
        "living": "true",
        "bountyAmount": "60,000,000",
        "type": "Jedi",
        "_id": uuidv4() 
    }
]

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

    res.send(newBounties)
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