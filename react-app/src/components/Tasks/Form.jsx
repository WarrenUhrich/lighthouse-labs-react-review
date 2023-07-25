import axios from 'axios';

const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const url = 'http://localhost:8080/api/tasks';
        
        axios.post(url, {
                description: props.newTask // key MUST match what we put in back-end req.body
            })
            .then(response => {
                console.log(
                    'New Task from back-end:',
                    response.data
                );
                props.setNewTask('');
                props.addNewToDo(response.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                New Task:
                <input
                    type="text"
                    onChange={e => props.setNewTask(e.target.value)}
                    value={props.newTask}
                />
            </label>
            <input
                type="submit"
                value="Add Task"
            />
        </form>
    );
};

export default Form;
