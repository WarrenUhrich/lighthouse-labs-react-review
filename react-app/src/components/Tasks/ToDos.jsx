import { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';

const ToDos = (props) => {
    useEffect(() => {
        const url = 'http://localhost:8080/api/tasks'
        axios.get(url)
            .then(response => {
                props.setTasks(Object.values(response.data));
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <ul>
            {props.tasks.length === 0
                ? <li>No props.Tasks Found</li> 
                : props.tasks.map(task => <Task key={task.id}>
                    {task.completed ? '✔' : '❌'}
                    {task.description}
                    <time>({task.date})</time>
                </Task>)}
        </ul>
    );
};

export default ToDos;
