import { useState } from 'react';
import axios from 'axios';

const ToDoForm = ({setToDos}) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/todos', {task: newTask})
             .then((response) => {
                console.log(response);

                const savedTask = response.data;

                setToDos(prev => [...prev, savedTask]);

                setNewTask('');
             });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={event => {setNewTask(event.target.value);}}
                value={newTask}
            />
            <input
                type="submit"
                value="Add To-Do"
            />
        </form>
    );
};

export default ToDoForm;
