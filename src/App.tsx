import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn typescript'),
    new Todo('full stack web developer')
  ];
  
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
