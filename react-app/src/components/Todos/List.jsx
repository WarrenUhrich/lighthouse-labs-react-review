import axios from 'axios';
import Item from './Item';

const List = (props) => {
    const todos = props.todos;

    const handleClick = (id) => {
        axios.patch(`http://localhost:5000/api/todos/${id}`)
             .then(response => {
                props.setTodos((prev) => {
                    return {...prev, [id]: response.data};
                });
             });
    };

    const todosListItems = Object.keys(todos).map((id) => {
        return (
            <Item onClick={() => handleClick(id)} key={id} todo={todos[id]}>
                {todos[id].taskName}
            </Item>
        );
    });

    return (
        <ul>
            {todosListItems}
        </ul>
    );
};

export default List;
