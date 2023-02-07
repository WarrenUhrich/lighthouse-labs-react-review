const Item = (props) => {
    const todo = props.todo;
    
    return (
        <li>
            <h3 onClick={props.onClick}>
                {todo.completed ? '✅' : '📦'}
                {props.children}
            </h3>
            <p>
                {todo.dueDate} | Priority: {todo.priority}
            </p>
        </li>
    );
};

export default Item;
