import React, { useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';

const Todos = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks(prev => [...prev, task]);
    };

    // How do we limit this?
    useEffect(() => {
        fetch('/api/tasks') // GET /api/tasks
                .then(response => response.json()) // converting from JSON string to JS array
                .then(todos => setTasks(todos)); // storing result in state
    }, []);

    return (
        <>
            <Header />
            <Form addTask={addTask} />
            <List tasks={tasks} />
        </>
    );
};

export default Todos;
