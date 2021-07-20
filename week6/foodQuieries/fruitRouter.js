const express = require('express');
const fruitRouter = express.Router();




const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200
    },
    {
        name: "pants",
        type: "clothing",
        price: 2500
    },
    {
        name: "basket ball",
        type: "toy",
        price: 100
    },
    {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500
    },
    {
        name: "shirt",
        type: "clothing",
        price: 800
    },
    {
        name: "soup",
        type: "food",
        price: 300
    },
    {
        name: "flour",
        type: "food",
        price: 100
    }
]

fruitRouter.route("/")


.get((req, res) => {
    const itemName = req.query.name;
    const filteredItem = inventoryItems.filter(item => item.name === itemName);

    res.send(filteredItem)
})


module.exports = fruitRouter;