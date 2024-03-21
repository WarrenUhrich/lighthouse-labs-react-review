// Custom hook!
const useTodos = () => {
    const [todos, setTodos] = useState(false);
    
    useEffect(() => {
        fetch('/api/todos')
            .then(response => response.json())
            .then(todoArr => setTodos(todoArr));
    }, []); // Empty array; our callback will only run once.
    
    const completeTodo = id => {
        setTodos(prev => {
            const newTodosArr = [...prev];
            const completedTodo = newTodosArr.find(todo => todo.id === id);
            completedTodo.completed = !completedTodo.completed;
            return newTodosArr; // prev === newTodosArr
        });
    };

    const addTodo = todo => {
        setTodos(prev => [...prev, todo]);
    };

    return [todos, completeTodo, addTodo];
};