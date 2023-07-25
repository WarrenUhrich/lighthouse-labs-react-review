const express = require('express');
const router = express.Router();
const uuid = require('uuid');

////////////////////////////////////////////////////////////////////
// "Database"
////////////////////////////////////////////////////////////////////

const tasks = require('../db/tasks');

////////////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////////////

/**
 * BROWSE
 * GET /api/tasks/
 */
router.get('/', (req, res) => {
    res.json(tasks);
});

/**
 * CREATE
 * POST /api/tasks/
 */
router.post('/', (req, res) => {
    const newTaskID = uuid.v4();
    
    const newDate = new Date();

    const newTask = {
        id: newTaskID,
        description: req.body.description,
        date: `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`,
        completed: false,
    };

    tasks[newTaskID] = newTask;

    res.json(newTask);
});

module.exports = router;
