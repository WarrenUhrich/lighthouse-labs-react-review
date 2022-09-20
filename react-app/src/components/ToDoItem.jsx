import axios from 'axios';

const ToDoItem = ({toDo, setToDos}) => {
    const handleClick = () => {
        axios.patch(`http://localhost:8080/todos/${toDo.id}/complete`)
             .then((response) => {
                setToDos(prev => {
                    const arrayCopy = prev.filter(element => toDo.id !== element.id);
                    arrayCopy.push({
                        ...toDo,
                        completed: true
                    });                    
                    return arrayCopy;
                });
             });
    };

    return (
        <>
            {toDo.completed === false && <li>
                {toDo.task}
                &nbsp;
                <button onClick={handleClick}>
                    ✅
                </button>
            </li>}
        </>
    );
};

export default ToDoItem;
