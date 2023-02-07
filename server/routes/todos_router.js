const express = require('express');
const router = express.Router();
const todos = require('../db/todos');
const uniqid = require('uniqid');

/**
 * BROWSE
 * GET /api/todos
 */
router.get('/', (req, res) => {
    res.json(todos);
});

/**
 * CREATE
 * POST /api/todos
 */
router.post('/', (req, res) => {
    const taskName = req.body.taskName;
    const priority = req.body.priority;
    const dueDate = req.body.dueDate;
    const completed = false;
    
    const newTodo = {
        id: uniqid(),
        taskName,
        priority,
        dueDate,
        completed
    };

    todos[newTodo.id] = newTodo;

    res.json(newTodo);
});

/**
 * COMPLETE TODO
 * PATCH /api/todos/:id
 */
router.patch('/:id', (req, res) => {
    const todoID = req.params.id;

    todos[todoID].completed = !todos[todoID].completed;

    res.json(todos[todoID]);
});

module.exports = router;
