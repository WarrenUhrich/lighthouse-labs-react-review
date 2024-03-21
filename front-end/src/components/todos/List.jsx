import React from 'react';
import ListItem from './ListItem';

const List = ({todos, completeTodo}) => {
    return (
        <>
            <h2>To-Do List:</h2>
            {todos === false && <p>Loading...</p>}
            {Array.isArray(todos) && <ul>
                    {todos.map(todo => <ListItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        date={todo.date}
                        completed={todo.completed}
                        completeTodo={completeTodo}
                        />)}
                </ul>}
        </>
    );
};

export default List;
