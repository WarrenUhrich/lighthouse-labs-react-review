# Lighthouse Labs | React Review

* [ ] Review React!

## To-Do List

* Stay away from things like authentication, datbase

Back-end; what we'll need in terms of routes:

* `GET /todos` ---> list of to-dos
* `GET /todos/:id` ---> show 1 to-do # low priority / maybe?
* `PUT /todos/:id` ---> edit to-do
* `PATCH /todos/:id` ---> complete to-do
* `DELETE /todos/:id` ---> delete a to-do
* `POST /todos` ---> create a new to-do

Front-end; what we'll need in terms of components:

* ToDoList
* ToDoListForm
* ToDoListItem
    * Completed?
    * Edit?

What does one of our todos look like?

```JavaScript
const toDos = {
    UNIQUEKEY: {
        id: UNIQUEKEY,
        taskName: 'task text',
        completed: true,
        priority: 1,
        dueDate: '2023-02-10'
    },
    UNIQUEKEY: {
        id: UNIQUEKEY,
        taskName: 'task text',
        completed: true,
        priority: 1,
        dueDate: '2023-02-10'
    }
};
```
