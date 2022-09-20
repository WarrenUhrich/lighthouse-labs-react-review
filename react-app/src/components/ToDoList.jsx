import ToDoItem from './ToDoItem';

const ToDoList = ({toDos, setToDos}) => {
    return (
        <ul>
            {toDos.map((toDo) => <ToDoItem key={toDo.id} toDo={toDo} setToDos={setToDos} />)}
        </ul>
    );
};

export default ToDoList;
