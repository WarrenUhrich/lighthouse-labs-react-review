import ToDoItem from './ToDoItem';

const ToDoList = ({toDos}) => {
    return (
        <ul>
            {toDos.map((toDo) => <ToDoItem key={toDo.id} toDo={toDo} />)}
        </ul>
    );
};

export default ToDoList;
