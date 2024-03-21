// npm install express morgan uuid

//////////////////////////////////////////////////////////////////////////////
// Initialize
//////////////////////////////////////////////////////////////////////////////

const { v4: uuidv4 } = require('uuid');
const morgan = require('morgan');
const express = require('express');
const app = express();

const PORT = 8080;

//////////////////////////////////////////////////////////////////////////////
// "Database"
//////////////////////////////////////////////////////////////////////////////

let todos = [
    {
        id: uuidv4(),
        text: 'Buy milk',
        date: '2024-03-30',
        completed: false
    },
    {
        id: uuidv4(),
        text: 'Study express',
        date: '2024-04-01',
        completed: false
    }
];

console.log(todos);

//////////////////////////////////////////////////////////////////////////////
// Middleware
//////////////////////////////////////////////////////////////////////////////

app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//////////////////////////////////////////////////////////////////////////////
// Listener
//////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => console.log(
    `Express back-end is listening at http://localhost:${PORT}`
));

//////////////////////////////////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////////////////////////////////

const todoRoutePrepend = '/api/todos';

/**
 * Get all todos
 * GET /api/todos/
 */
app.get(`${todoRoutePrepend}/`, (req, res) => {
    res.status(200).json(todos);
});

/**
 * Create new todo
 * POST /api/todos/
 */
app.post(`${todoRoutePrepend}/`, (req, res) => {
    const newTodo = {
        id: uuidv4(),
        text: req.body.text,
        date: req.body.date,
        completed: false
    };
    
    todos.push(newTodo);

    console.log(todos);
    res.status(200).json(newTodo);
});

/**
 * Update todo
 * POST /api/todos/:id
 */
app.post(`${todoRoutePrepend}/:id`, (req, res) => {
    const targetTodo = todos.find(todo => todo.id === req.params.id);

    if(req.body.text) {
        targetTodo.text = req.body.text;
    }

    if(req.body.date) {
        targetTodo.date = req.body.date;
    }

    console.log(todos);
    res.status(200).json(targetTodo);
});

/**
 * Delete todo
 * POST /api/todos/:id/delete
 */
app.post(`${todoRoutePrepend}/:id/delete`, (req, res) => {
    todos = todos.filter(todo => todo.id !== req.params.id);

    console.log(todos);
    res.status(200).json(todos);
});

/**
 * Complete todo
 * POST /api/todos/:id/complete
 */
app.post(`${todoRoutePrepend}/:id/complete`, (req, res) => {
    const targetTodo = todos.find(todo => todo.id === req.params.id);

    targetTodo.completed = !targetTodo.completed; // Flip to opposite boolean.

    console.log(todos);
    res.status(200).json(targetTodo);
});
