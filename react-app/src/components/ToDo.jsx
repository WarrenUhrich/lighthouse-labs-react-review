import { useState, useEffect } from 'react';
import axios from 'axios';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const ToDo = ({heading = 'To-Do Component'}) => {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/todos')
             .then((response) => {
                // console.log(response);

                setToDos(response.data);
             });
    }, []);

    return(
        <section>
            <h2>{heading}</h2>
            <ToDoForm setToDos={setToDos} />
            <ToDoList toDos={toDos} />
        </section>
    );
};

export default ToDo;
