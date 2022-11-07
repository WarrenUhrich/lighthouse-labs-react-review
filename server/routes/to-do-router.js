const toDos = require('../db/to-dos');
const express = require('express');
const uniqid = require('uniqid');
const router = express.Router();

//////////////////////////////////////////////////////////////////
// Index
//////////////////////////////////////////////////////////////////

router.get('/', (req, res) => {
    res.json(toDos);
});

//////////////////////////////////////////////////////////////////
// Create
//////////////////////////////////////////////////////////////////

router.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newTask = req.body.task;

    console.log('form data received:', req.body);

    const newToDo = {
        id: uniqid(),
        title: newTitle,
        task: newTask,
        completed: false,
    };

    toDos[newToDo.id] = newToDo;

    res.json(newToDo);
});

//////////////////////////////////////////////////////////////////
// Complete To-Do
//////////////////////////////////////////////////////////////////

router.patch('/:id/complete', (req, res) => {
    if (toDos[req.params.id]) {
        toDos[req.params.id].completed = true;
        res.json(toDos[req.params.id]);
    } else {
        res.json({error: 'ID not found.'})
    }
});

module.exports = router;
