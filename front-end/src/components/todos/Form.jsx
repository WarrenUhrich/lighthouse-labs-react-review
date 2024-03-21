import React from 'react';

const Form = ({addTodo}) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        event.target.setAttribute('disabled', true);

        const textInput = event.target.children[1].children[0];
        const textValue = textInput.value;
        const dateInput = event.target.children[3].children[0];
        const dateValue = dateInput.value;

        // console.log(textValue, dateValue);

        const urlEncodedString = `text=${encodeURIComponent(textValue)}&date=${encodeURIComponent(dateValue)}`;

        fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: urlEncodedString
        })
            .then(response => response.json())
            .then(todo => {
                console.log(todo);
                addTodo(todo);
                textInput.value = '';
                dateInput.value = '';
                event.target.removeAttribute('disabled');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>To-Do Form</h2>
            <label>
                New To-Do Text:
                <input type="text" />
            </label>
            <br />
            <label>
                Due Date:
                <input type="date" />
            </label>
            <br />
            <input type="submit" value="Add To-Do to List" />
        </form>
    );
};

export default Form;
