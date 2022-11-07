# Lighthouse Labs | React Review

* [ ] Review React!

## What do we want to build?

Basic to-do application.

Data Structure:

```JavaScript
const toDos = {
    UNIQUEKEY: {
        id: UNIQUEKEY,
        title: "title text",
        task: "your text",
        completed: true
    },
    UNIQUEKEY: {
        id: UNIQUEKEY,
        title: "title text",
        task: "your text",
        completed: true
    }
};
```

Express (Server) Routes:

* `GET    /to-dos`               READ / BROWSE (DISPLAY ALL TO-DOS)
* `POST   /to-dos/`              CREATE TO-DO
* `PATCH  /to-dos/:id/complete`  COMPLETE TO-DO
* `PATCH  /to-dos/:id`           UPDATE TO-DO
* `DELETE /to-dos/:id`           DELETE TO-DO

React (Front-End) Components:

* App
* (Optional) Header / Navbar
* ToDoList
* ToDoListItem
* NewToDoForm
* EditToDoForm
* Status (Spinning Wheel?)
