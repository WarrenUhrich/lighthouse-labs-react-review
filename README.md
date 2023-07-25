# Lighthouse Labs | React Review

* [ ] Review React!

## Build a Full-Stack React To-Do App

What should we be able to do with `ToDos`?

* User should be able to add a new to-do
* User should be able to see a list of to-dos
* User should be able to mark a to-do as done or complete
    * Hide, or remove from list
* User should be able to edit an existing to-do
* User should be able to delete an existing to-do

1. Back-end (Express)
    * API
    * Routes:
        * `GET    /api/tasks`     -> give list of all tasks
        * `POST   /api/tasks`     -> save new task
        * `PUT    /api/tasks/:id` -> update existing task
        * `DELETE /api/tasks/:id` -> delete existing task
        * `PATCH  /api/tasks/:id` -> mark as complete

```js
// "database"
const toDos = {
    UNIQUEKEY: {
        id: UNIQUEKEY,
        description: 'my task!',
        date: '2023-07-26',
        completed: false
    },
    UNIQUEKEY: {
        id: UNIQUEKEY,
        description: 'other task',
        date: '2023-07-27',
        completed: true
    }
};
```

2. React App
    * Components
        * Tasks
            * Header
            * Form
            * ToDos
                * Task
            * Completed
                * Task