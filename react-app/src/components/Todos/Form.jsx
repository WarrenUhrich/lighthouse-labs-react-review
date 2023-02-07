import axios from 'axios';
import { useState } from 'react';

const Form = (props) => {
    const [newTask, setNewTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/todos', {
            taskName: newTask,
            priority: priority,
            dueDate: dueDate
        })
             .then(response => {
                props.setTodos((prev) => {
                    return {...prev, [response.data.id]: response.data};
                });
             });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task:
                <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
            </label>
            <label>
                Due Date:
                <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
            </label>
            <label>
                Priority:
                <input type="number" value={priority} onChange={(event) => setPriority(event.target.value)} />
            </label>
            <input type="submit" value="Add Todo" />
        </form>
    );
};

export default Form;
