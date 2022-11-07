import {useState, useEffect} from 'react';
import axios from 'axios';

const ToDoList = (props) => {
    const [status, setStatus] = useState('loading');
    const [toDos, setToDos] = useState({});

    useEffect(() => {
        axios.get('http://localhost:7777/to-dos')
             .then((response) => {
                console.log('axios response:', response);
                return response.data;
             })
             .then((data) => {
                console.log('axios data:', data);
                setToDos(data); // Save to-dos in state.
                setStatus('complete'); // Set status to complete.
             })
             .catch((error) => {
                setStatus('error');
             });
    }, []);

    const toDosJSX = Object.values(toDos).map((toDo) =>
        <li key={toDo.id}>
            <h3>{toDo.title}</h3>
            <p>{toDo.task}</p>
        </li>
    );
    console.log(toDosJSX);

    return (
        <section>
            <h2>{props.heading}</h2>
            {status === 'error' && <p>Error encountered, please contact admin.</p>}
            {status === 'loading' && <p>Loading...</p>}
            {status === 'complete' && <ul>{toDosJSX}</ul>}
        </section>
    );
};

export default ToDoList;
