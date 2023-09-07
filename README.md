# Lighthouse Labs | Concluding React

* [ ] Review React Concepts
* [ ] Build a Simple App

## To-Do App

* Back-End (Express)
    * API - JSON
* Front-End (React)

## Data

```js
const toDos = [
    {
        id: 'jfsdkljfdklsflsdlflsd'
        title: 'Buy Milk',
        checked: true // || false
    },
    {
        id: 'sdfdsfdsfdfdsfffsdfsd'
        title: 'Study React',
        checked: false
    }
];
```

## API Endpoints

Index, Create, Read, Update, Delete, Edit, Save.

* Index:  `GET /api/todos` (Show all to-dos.)
* Read:   `GET /api/todos/:id` (Show single to-do.)
* Update: `PUT /api/todos/:id` (Update single to-do.)
* Delete: `DELETE /api/todos/:id` (Delete single to-do.)
* Save:   `POST /api/todos` (Add new to-do.)

## React Planning

Components:
* Header
* Form
* ToDoList
    * ToDo
