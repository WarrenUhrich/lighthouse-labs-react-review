import React from 'react';

const Form = ({addTask}) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        form.setAttribute('disabled', true);

        const taskTitleInput = form.children[0].children[0];
        const taskTitle = taskTitleInput.value;
        const descriptionInput = form.children[2].children[0];
        const description = descriptionInput.value;
        const dueDateInput = form.children[4].children[0];
        const dueDate = dueDateInput.value;

        console.log('taskTitle:', taskTitle);
        console.log('description:', description);
        console.log('dueDate:', dueDate);

        fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: `taskTitle=${taskTitle}&description=${description}&dueDate=${dueDate}`
        })
        .then(response => response.json())
        .then(todo => {
            console.log('new todo:', todo);
            taskTitleInput.value = '';
            descriptionInput.value = '';
            dueDateInput.value = '';
            addTask(todo);
            form.removeAttribute('disabled');
        });
    };

    return (
        <section>
            <h2>Create New To-Do</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Task Title:
                    <input type="text" />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" />
                </label>
                <br />
                <label>
                    Due Date
                    <input type="date" />
                </label>
                <input type="submit" value="Add Task" />
            </form>
        </section>
    );
};

export default Form;
