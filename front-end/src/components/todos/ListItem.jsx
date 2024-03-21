import React from 'react';

const ListItem = ({id, text, date, completed, completeTodo}) => {

    const handleClick = (event) => {
        event.target.setAttribute('disabled', true);
        fetch(`/api/todos/${id}/complete`, {method: 'POST'})
            .then(response => response.json())
            .then(todo => {
                completeTodo(todo.id);
                event.target.removeAttribute('disabled');
            });
    };

    console.log(completed);

    return (
        <li style={{textDecoration: completed === true && 'line-through'}}>
            <input type="checkbox" checked={completed} onClick={handleClick} />
            <time>{date}</time>
            &nbsp;
            <strong>{text}</strong>
        </li>
    );
};

export default ListItem;
