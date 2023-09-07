import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [newTitle, setNewTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const URL = 'http://localhost:8080/api/todos';

        const newToDo = {
            title: newTitle
        };

        // POST /api/todos
        axios.post(URL, newToDo)
             .then((result) => {
                console.log('SUCCESS:', result.data);
             });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter New To-Do:
                <input
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                />
            </label>
            <input
                type="submit"
                value="Add To-Do"
            />
        </form>
    );
};

export default Form;
