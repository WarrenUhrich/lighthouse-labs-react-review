# Lighthouse Labs | React Review

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-react-review/tree/2022.11.07-web-ft-east-19sept2022) | [Vimeo Video Recording (Coming Soon)](#coming-soon)

* [X] Review React!

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
