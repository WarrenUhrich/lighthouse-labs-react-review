import React from 'react';

const ListItem = ({id, taskTitle, description, dueDate, status}) => {
    return (
        <li>
            <em>{status}</em>
            &nbsp;
            <time>{dueDate}</time>
            &nbsp;
            <strong>{taskTitle}</strong>
            <p>{description}</p>
        </li>
    );
};

export default ListItem;
