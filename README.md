# Lighthouse Labs | Concluding React

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-react-review/tree/2023.09.07-web-flex-day-17april2023) | [Vimeo Video Recording](https://vimeo.com/862165937/dd25d8b055?share=copy)

* [X] Review React Concepts
* [X] Build a Simple App

## Running this Example

Open a terminal window:

```BASH
cd ./back-end            # Enter the back-end folder
npm install              # Install dependencies
node ./express_server.js # Start the Express server
```

Open a **second** terminal window:

```BASH
cd ./front-end # Enter the front-end folder
npm install    # Install dependencies
npm start      # Start the React development server
```

## To-Do App

* Back-End (Express)
    * API - JSON
* Front-End (React)

## Data

```js
const toDos = [
    {
        id: 'jfsdkljfdklsflsdlflsd' // uniqid()
        title: 'Buy Milk',
        checked: true // || false
    },
    {
        id: 'sdfdsfdsfdfdsfffsdfsd' // uniqid()
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
