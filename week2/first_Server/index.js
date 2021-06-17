const express = require('express');
const app = express();
const port = 3000;

app.get('/movies',(req, res) => {
    res.json([
        {"movie": "Sonic"}, {"movie": "Mortal Kombat"}, {"movie": "Silver Linings"}
    ])
});

app.get('/games', (req, res) => {
    res.json([
        {"game": "Destiny"}, {"game": "Pokemon"}, {"game": "God of War"}
    ])
});

app.get('/books', (req, res) => {
    res.json([
        {"book": "Vladmir Todd"}, {"book": "Brain on Fire"}, {"book": "Chaos Seeds"}
    ])
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});