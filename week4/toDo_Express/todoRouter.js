const express = require('express');
const todoRouter = express.Router();
const { v4: uuidv4 } = require('uuid');


let toDos = 
[
    {
        "name": "Laundry",
        "description": "Wash Clothes",
        "imageUrl": "C:\Users\MPers\development\bryan-university\fsw-125\week4\toDo_Express\laundry.jpg",
        "completed": false,
        "_id": uuidv4()
    },
    {
        "name": "Car",
        "description": "Get an oilchange",
        "imageUrl": "C:\Users\MPers\development\bryan-university\fsw-125\week4\toDo_Express\car.jpg",
        "completed": false,
        "_id": uuidv4()  
    },
    {
        "name": "Groceries",
        "description": "Go grocery shopping",
        "imageUrl": "C:\Users\MPers\development\bryan-university\fsw-125\week4\toDo_Express\food.jpg",
        "completed": false,
        "_id": uuidv4()  
    },
    {
        "name": "Workout",
        "description": "Go to the gym",
        "imageUrl": "C:\Users\MPers\development\bryan-university\fsw-125\week4\toDo_Express\weights.jpg",
        "completed": false,
        "_id": uuidv4()  
    }
];

todoRouter.route("/")

.get((req, res) => {
    res.send(toDos)
})

.post((req, res) => {
    let newTodo =req.body;
    newTodo.name = req.body.name;
    newTodo.description = req.body.description;
    newTodo.name = req.body.name;
    newTodo.completed = req.body.completed;
    newTodo._id = uuidv4();
    toDos.push(newTodo);

    console.log(toDos);
    res.send('posted successfully')
})

todoRouter.route('/:toDoId')

.get((req, res) => {
    const toDoId = req.params.toDoId;
    const singleTodo = toDos.find(toDos => toDos._id === toDoId);

    res.send(singleTodo);
})

.delete((req, res) => {
    const toDoId = req.params.toDoId;
    const todoIndex = toDos.findIndex(toDos => toDos._id === toDoId)
    toDos.splice(todoIndex, 1);

    res.send('you have successfully delete the todo!');
})

.put((req, res) => {
    const toDoId = req.params.toDoId;
    const todoIndex = toDos.findIndex(toDos => toDos._id === toDoId);
    Object.assign(toDos[todoIndex], req.body);

    res.send('The todo has been updated');
})



module.exports = todoRouter;