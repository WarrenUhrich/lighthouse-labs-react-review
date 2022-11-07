import {useState} from 'react';
import axios from 'axios';

const NewToDoForm = (props) => {
    const [fieldState, setFieldState] = useState({
        title: '',
        task: ''
    });

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('POST DATA:', fieldState);
        axios.post('http://localhost:7777/to-dos', fieldState)
             .then((response) => {
                return response.data;
             })
             .then((data) => {
                props.setToDos((prev) => {
                    return {...prev, [data.id]: data}; // Add new toDo to state
                });
                setFieldState({
                    title: '',
                    task: ''
                });
             });
    };

    return (
        <form onSubmit={submitHandler}>
            <label>
                Title:
                <input
                    type="text"
                    onChange={event => setFieldState(prev => ({...prev, title: event.target.value}))}
                    value={fieldState.title}
                />
            </label>

            <label>
                Task:
                <input
                    type="text"
                    onChange={event => setFieldState(prev => ({...prev, task: event.target.value}))}
                    value={fieldState.task}
                />
            </label>

            <input type="submit" value="submit" />
        </form>
    );
};

export default NewToDoForm;
