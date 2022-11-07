const uniqid = require('uniqid');

const id1 = uniqid();
const id2 = uniqid();
const id3 = uniqid();

const toDos = {
    [id1]: {
        id: id1,
        title: "Grocery",
        task: "Buy milk",
        completed: false
    },
    [id2]: {
        id: id2,
        title: "Learning",
        task: "Study React",
        completed: false
    },
    [id3]: {
        id: id3,
        title: "Pet",
        task: "Walk dog",
        completed: true
    }
};

module.exports = toDos;
