import axios from 'axios';

const ToDoListItem = (props) => {
    const clickHandler = () => {
        axios.patch(`http://localhost:7777/to-dos/${props.toDo.id}/complete`)
             .then((response) => {
                return response.data;
             })
             .then((data) => {
                props.setToDos((prev) => {
                    const newState = {...prev};
                    newState[props.toDo.id].completed = true;
                    return newState;
                });
             });
    };

    return (
        <li>
            <h3>{props.toDo.title}</h3>
            <p>{props.toDo.task}</p>
            <button
                onClick={clickHandler}
                disabled={props.toDo.completed}
            >
                {props.toDo.completed ? '✅' : '🔳'}
            </button>
        </li>
    );
};

export default ToDoListItem;
