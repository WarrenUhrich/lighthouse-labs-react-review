import Header from './Header';
import Form from './Form';
import ToDos from './ToDos';

import { useState } from 'react';

const Tasks = (props) => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addNewToDo = (newToDo) => {
        setTasks(prev => {
            return [newToDo, ...prev];
        });
    };

    return (
        <section>
            <Header title={props.title} />
            <Form
                newTask={newTask}
                setNewTask={setNewTask}
                addNewToDo={addNewToDo}
            />
            <ToDos
                tasks={tasks}
                setTasks={setTasks}
            />
            {/* Completed */}
        </section>
    );
};

export default Tasks;
