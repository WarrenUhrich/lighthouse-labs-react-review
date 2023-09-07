import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Header from './Header';
import Form from './Form';
import ToDosList from './ToDosList';

const ToDosApp = (props) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Index:  `GET /api/todos` (Show all to-dos.)
        const URL = 'http://localhost:8080/api/todos';

        axios.get(URL)
            .then((results) => {
                const ajaxTodos = results.data;
                console.log(ajaxTodos);
                setTodos(ajaxTodos);
            });
    }, []);
    

    return (
        <section>
            <Header>
                {props.heading || 'To-Dos App'}
            </Header>
            <Form />
            <ToDosList todos={todos} checked={false} />
            <ToDosList todos={todos} checked={true} />
        </section>
    );
};

export default ToDosApp;
