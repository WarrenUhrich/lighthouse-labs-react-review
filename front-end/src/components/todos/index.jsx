import React from 'react';
import useTodos from './useTodos';
import Header from './Header';
import Form from './Form';
import List from './List';

const ToDos = () => {
    const [todos, completeTodo, addTodo] = useTodos();
    
    return (
        <section>
            <Header />
            <Form addTodo={addTodo} />
            <List todos={todos} completeTodo={completeTodo} />
        </section>
    );
};

export default ToDos;
