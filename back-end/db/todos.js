const uniqid = require('uniqid');

let todos = [
    {
        id: uniqid(),
        title: 'Buy Milk',
        checked: true // || false
    },
    {
        id: uniqid(),
        title: 'Study React',
        checked: false
    }
];

module.exports = todos;
