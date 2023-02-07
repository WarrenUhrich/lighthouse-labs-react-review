# Lighthouse Labs | React Review

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-react-review/tree/2023.02.07-web-flex-day-19sept2022) | [Vimeo Video Recording (Coming Soon)](#coming-soon)

* [X] Review React!

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
