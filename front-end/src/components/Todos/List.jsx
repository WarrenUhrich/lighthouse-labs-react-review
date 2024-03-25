import React from 'react';
import ListItem from './ListItem';

const List = ({tasks}) => {

    return (
        <section>
            <h2>To-Dos List</h2>
            <ul>{tasks.map(task => {
                console.log('task:', {...task});
                return <ListItem
                    key={task.id}
                    id={task.id} 
                    taskTitle={task.taskTitle}
                    description={task.description}
                    dueDate={task.dueDate}
                    status={task.status}
                />
            })}</ul>
        </section>
    );
};

export default List;
