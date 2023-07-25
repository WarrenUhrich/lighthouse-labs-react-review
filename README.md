# Lighthouse Labs | React Review

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-react-review/tree/2023.07.25-web-flex-day-20march2023) | [Vimeo Video Recording](https://vimeo.com/848513030/dbaefcb0bd?share=copy)

* [X] Review React!

## Let's build a to-do app!

What should we be able to do with `ToDos`?

* User should be able to add a new to-do
* User should be able to see a list of to-dos
* User should be able to mark a to-do as done or complete
    * Hide, or remove from list
* User should be able to edit an existing to-do
* User should be able to delete an existing to-do

## Running this Example

Open a terminal window:

```BASH
cd ./server              # Enter the back-end folder
npm install              # Install dependencies
node ./express-server.js # Start the Express server
```

Open a **second** terminal window:

```BASH
cd ./react-app # Enter the front-end folder
npm install    # Install dependencies
npm start      # Start the React development server
```

## To-Do List

### 1. Back-end (Express)

* API
* Routes:
    * `GET    /api/tasks`     -> give list of all tasks
    * `POST   /api/tasks`     -> save new task
    * `PUT    /api/tasks/:id` -> update existing task
    * `DELETE /api/tasks/:id` -> delete existing task
    * `PATCH  /api/tasks/:id` -> mark as complete

### 2. Front-end (React App)

* Components
    * Tasks
        * Header
        * Form
        * ToDos
            * Task
        * Completed
            * Task

What does one of our todos look like?

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

## Resources

* [Add React in One Minute](https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)
  * [Try JSX](https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx)
* [JavaScript XML (JSX)](https://reactjs.org/docs/introducing-jsx.html)
* [Babel](https://babeljs.io/)
* [JavaScript ES6 Module Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [Creating a Production Build](https://create-react-app.dev/docs/production-build)
* [React "StrictMode"](https://reactjs.org/docs/strict-mode.html)
* [Components and Props](https://reactjs.org/docs/components-and-props.html)
* [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
* [Forms in React](https://reactjs.org/docs/forms.html)
* [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Robots.txt](https://www.robotstxt.org/robotstxt.html)
* [Favicon.ico & App Icon Generator](https://www.favicon-generator.org/)
* [Oreilly's Learning React, 2nd Edition (Warren's Favourite Resource!)](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)
