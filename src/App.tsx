import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewToDo from './components/NewToDo';

function App() {
  const [todos, setToDos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {
    const newToDo = new Todo(todoText);
    setToDos((currentToDos) => {
      return currentToDos.concat(newToDo)
    });
  }

  return (
    <div>
      <NewToDo onAddTodo={addToDoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
