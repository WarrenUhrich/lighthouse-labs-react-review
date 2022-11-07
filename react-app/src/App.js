import './App.css';
import NewToDoForm from './components/to-dos/NewToDoForm';
import ToDoList from './components/to-dos/ToDoList';
import {useState} from 'react';

function App() {
  const [toDos, setToDos] = useState({});

  return (
    <main>
      <NewToDoForm setToDos={setToDos} />
      <ToDoList
        toDos={toDos}
        setToDos={setToDos}
        heading="To-Do List"
      />
    </main>
  );
}

export default App;
