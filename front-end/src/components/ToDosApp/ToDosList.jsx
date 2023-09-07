import React from 'react';
import ToDo from './ToDo';

const ToDosList = (props) => {
    const checked = props.checked;
    const todos = props.todos;

    const filteredTodos = todos.filter(todo => todo.checked === checked);

    const formattedTodos = filteredTodos.map(todo => (
        <ToDo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            checked={todo.checked}
        />
    ));

    return (
        <>
            <h3>
                {!checked && 'Pending '}
                {checked && 'Completed '}
                To-Dos
            </h3>
            <ul>
                {formattedTodos}
            </ul>
        </>
    );
};

export default ToDosList;
