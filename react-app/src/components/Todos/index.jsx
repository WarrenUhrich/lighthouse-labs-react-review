import axios from 'axios';
import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';

const Todos = () => {
    const [todos, setTodos] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/todos')
         .then(response => {
            // console.log(response.data);
            setTodos(response.data);
        });
    }, []);
    
    return (
        <section>
            <h2>Todo App</h2>
            <Form setTodos={setTodos} />
            <List todos={todos} setTodos={setTodos} />
        </section>
    );
};

export default Todos;
