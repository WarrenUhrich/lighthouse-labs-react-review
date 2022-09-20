const app = require('express')();
const morgan = require('morgan');
const uniqid = require('uniqid');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8080;

app.use(morgan('dev'));
app.use(bodyParser());
app.use(cors());

const data = [
    {id: uniqid(), task: 'Buy milk', completed: false},
    {id: uniqid(), task: 'Learn about React', completed: false},
    {id: uniqid(), task: 'Practice CSS', completed: false}
];

app.get(['/', '/todos'], (req, res) => {
    res.json(data);
});

app.post('/todos', (req, res) => {
    const newTask = {
        id: uniqid(),
        task: req.body.task,
        completed: false
    };
    data.push(newTask);
    res.json(newTask);
});

app.patch('/todos/:id/complete', (req, res) => {
    const taskToUpdate = data.find(toDo => toDo.id === req.params.id);
    if (taskToUpdate) taskToUpdate.completed = true;
});

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
});

