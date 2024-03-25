# Lighthouse Labs | React Review

* [ ] Review React Concepts
* [ ] Build a Simple App

## To-Do App Plan:

Features:
* See list of all to-dos
* Create new to-do
* Delete to-do
* Edit to-do
* Search?
* Complete a to-do

Our stack today:
* Back-end (Express)
* Front-end (React)

Our data today:

```js
const todos = [ // todos is an array of objects...
  { // Each todo will look like this:
    id: 'skdjflsdkjflksd', // Generate unique string.
    taskTitle: 'Buy milk',
    description: 'When I\'m at the store tomorrow don\'t forget to buy 1% milk.',
    status: 'In-Progress', // Completed, In-Progress, Incompleted
    dueDate: '2024-03-30'
  },
]; //  array? object?
```

Back-end API End-points:

```
GET     /tasks               # Show all
POST    /tasks               # Create new task
DELETE  /tasks/:id           # Delete a task
PUT     /tasks/:id           # Update a task
GET     /tasks?q=search+term # Search for a task
PATCH   /tasks/:id           # Update status: Completed, In-Progress, Incompleted
```

React Front-End:

Components...
* Header
* Form
* List
* ListItem
* Error
