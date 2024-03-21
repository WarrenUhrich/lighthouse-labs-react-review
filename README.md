# Lighthouse Labs | Concluding React

* [ ] Review React Concepts
* [ ] Build a Simple App

## To-Do Application

* Features?
    * Form for adding new to-dos!
    * List of pending to-dos!
    * Completing a to-do crosses it out
    * Edit an existing to-do
    * Delete an existing to-do

* COMPONENTS
    * Header
    * Form
    * ToDoList
    * ToDoItem


* We made a wireframe for our React application (front-end)
* We need to plan our back-end now... (Express app)

* ROUTES
* API end-points on back-end (we want to Ajax to these...)
    * `GET  /api/todos`              -> provide list of all to-dos
    * `POST /api/todos`              -> submit a new to-do
      `POST`
    * `POST /api/todos/:id/delete`   -> remove to-do
      `DELETE`
    * `POST /api/todos/:id`          -> update to-do
      `PUT`
    * `POST /api/todos/:id/complete` -> complete to-do
      `PATCH`

* What does our list of to-dos look like?
```js
const todos = [
    {
        id: 'ksdjflsd9348290', // To generate IDs... npm package.
        text: 'Buy milk!',
        date: '2024-03-30',
        completed: false
    }
];
```
