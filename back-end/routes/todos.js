////////////////////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////////////////////

const express = require('express');
let todos = require('../db/todos');
const uniqid = require('uniqid');

////////////////////////////////////////////////////////////////
// Set-Up
////////////////////////////////////////////////////////////////

const router = express.Router();

////////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////////

/**
 * Index:  `GET /api/todos` (Show all to-dos.)
 */
router.get('/', (req, res) => {
    res.json(todos);
});

/**
 * Read:   `GET /api/todos/:id` (Show single to-do.)
 */
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.filter(task => task.id === id)[0];
    res.json(todo);
});

/**
 * Update: `PUT /api/todos/:id` (Update single to-do.)
 */
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.filter(task => task.id === id)[0];

    const title = req.body.title;
    const checked = req.body.checked;

    todo.title = title;
    todo.checked = checked;

    res.json(todo);
});

/**
 * Delete: `DELETE /api/todos/:id` (Delete single to-do.)
 */
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    // Remove the target "delete" todo.
    const remainingTodos = todos.filter(task => task.id !== id);

    todos = remainingTodos;

    res.json(todos);
});

/**
 * Save:   `POST /api/todos` (Add new to-do.)
 */
router.post('/', (req, res) => {
    const newID = uniqid();
    const title = req.body.title;
    
    const newToDo = {
        id: newID,
        title: title,
        checked: false,
    };
    
    todos = [...todos, newToDo];

    // todos.push(newToDo);

    res.json(newToDo);
});

module.exports = router;
