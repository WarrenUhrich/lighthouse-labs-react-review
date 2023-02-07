const uniqid = require('uniqid');

const uniqid1 = uniqid();
const uniqid2 = uniqid();

const todos = {
    [uniqid1]: {
        id: uniqid1,
        taskName: 'Buy milk',
        completed: true,
        priority: 2,
        dueDate: '2023-02-20'
    },
    [uniqid2]: {
        id: uniqid2,
        taskName: 'Practice React',
        completed: true,
        priority: 1,
        dueDate: '2023-02-10'
    }
};

module.exports = todos;
