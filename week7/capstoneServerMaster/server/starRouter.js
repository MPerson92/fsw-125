const express = require('express');
const { next } = require('process');
const starRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let stars = 
[
    {
       "firstName": "Zillion",
       "lastName": "Maxus",
       "doesExist": "false",
       "starNumber": "300,000",
       "type": "Dim",
       "_id": uuidv4() 
    },
    {
        "firstName": "Sharp",
        "lastName": "Axial",
        "doesExist": "true",
        "starNumber": "500,000",
        "type": "Bright",
        "_id": uuidv4()
    },
    {
        "firstName": "Brighteous",
        "lastName": "Bulb",
        "doesExist": "false",
        "starNumber": "750,000",
        "type": "Bright",
        "_id": uuidv4() 
    },
    {
        "firstName": "Lemonious",
        "lastName": "Caps",
        "doesExist": "true",
        "starNumber": "900,000",
        "type": "Dim",
        "_id": uuidv4() 
    }
]

starRouter.route("/")

.get((req, res) => {
    res.status(200).send(stars)
})



.post((req, res) => {
    let newStars = req.body;
    newStars._id = uuidv4();
    newStars.firstName = req.body.firstName;
    newStars.lastName = req.body.lastName;
    newStars.doesExist = req.body.doesExist;
    newStars.starNumber = req.body.starNumber;
    newStars.type = req.body.type;
    stars.push(newStars);

    res.status(201).send(newStars)
})


starRouter.route('/:starId')

.get((req, res, next) => {
    const starId = req.params.starId;
    const singleStar = stars.find(stars => stars._id === starId);

    if(!singleStar) {
        const error = new Error('This star was not found')
        return next(res.status(500).send(error));
        
    }

    
    res.status(200).send(singleStar);
})



.delete((req, res) => {
    const starId = req.params.starId;
    const starIndex = stars.findIndex(stars => stars._id === starId)
    stars.splice(starIndex, 1);
 
    res.send('star succesfully deleted!')
})

.put((req, res) => {
    const starId = req.params.starId;
    const starIndex = stars.findIndex(stars => stars._id === starId)
    Object.assign(stars[starIndex], req.body);

    res.status(201).send("Star has been successfully updated to");
})

starRouter.route('/search/doesExist')

.get((req, res) => {
    const doesExist = req.query.doesExist;
    const filteredStars = stars.filter(stars => stars.doesExist === doesExist);
    
    res.status(200).send(filteredStars)
})




 
module.exports = starRouter;