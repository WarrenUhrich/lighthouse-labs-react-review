import React from 'react';

const ToDo = (props) => {
    const id = props.id;
    const title = props.title;
    const checked = props.checked;

    return (
        <li>
            <input type="checkbox" checked={checked} />
            {title}
        </li>
    );
};

export default ToDo;
