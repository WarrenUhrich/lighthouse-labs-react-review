// npm install express

////////////////////////////////////////////////////////////////////
// Initialization
////////////////////////////////////////////////////////////////////

const { v4: uuidv4 } = require('uuid');
const express = require('express');
const PORT = 8080;

const app = express();

////////////////////////////////////////////////////////////////////
// "Database"
////////////////////////////////////////////////////////////////////

let todos = [
    {
        id: uuidv4(),
        taskTitle: 'Buy milk',
        description: 'When I\'m at the store tomorrow don\'t forget to buy 1% milk.',
        status: 'In-Progress',
        dueDate: '2024-03-30'
    },
    {
        id: uuidv4(),
        taskTitle: 'Review Express',
        description: 'It has been a while, so refresh on the basics!',
        status: 'Incomplete',
        dueDate: '2024-04-02'
    },
];

////////////////////////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////////////////////////

app.use(express.urlencoded({extended: true}));

////////////////////////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////////////////////////

app.listen(PORT, () => console.log(
    `Express server is now listening on http://localhost:${PORT}`
));

////////////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////////////

/**
 * Show all to-dos...
 * GET /api/tasks
 */
app.get('/api/tasks', (req, res) => {
    res.status(200).json(todos);
});

/**
 * Create new to-do...
 * post /api/tasks
 */
app.post('/api/tasks', (req, res) => {
    const { taskTitle, description, dueDate } = req.body;

    const newId = uuidv4();

    const newTask = {
        id: newId,
        taskTitle,
        description,
        dueDate,
        status: 'Incomplete'
    };

    todos.push(newTask);

    res.status(200).json(newTask);
});

/**
 * Delete existing to-do...
 * delete /api/tasks/:id
 */
app.delete('/api/tasks/:id', (req, res) => {
    const id = req.params.id;

    todos = todos.filter(todo => todo.id !== id);

    res.status(200).json(todos);
});

/**
 * Update existing to-do...
 * put /api/tasks/:id
 */
app.put('/api/tasks/:id', (req, res) => {
    const id = req.params.id;

    const task = todos.find(todo => todo.id = id);

    if(task) {
        const {title, description, dueDate, status} = req.body;

        if(title) task.taskTitle = title;
        if(description) task.description = description;
        if(dueDate) task.dueDate = dueDate;
        if(status) task.status = status;

        return res.status(200).json(task);
    }
    return res.status(404).json({error: 'Task not found!'});
});

/**
 * Search for to-dos...
 * get /api/tasks/search?q=search+term
 */
app.get('/api/tasks/search', (req, res) => {
    const searchTerm = req.query.q;

    const results = todos.filter(todo => todo.taskTitle.toLowerCase().includes(searchTerm.toLowerCase()) || todo.description.toLowerCase().includes(searchTerm.toLowerCase()));

    res.status(200).json(results);
});

/**
 * Set status for to-do...
 * patch /api/tasks/:id
 */
app.patch('/api/tasks/:id', (req, res) => {
    const id = req.params.id;

    const task = todos.find(todo => todo.id = id);

    if(task) {
        const newStatus = req.body.status;

        task.status = newStatus;

        return res.status(200).json(task);
    }
    return res.status(404).json({error: 'Task not found!'});
});