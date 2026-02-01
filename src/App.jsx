import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
  };

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) => obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj)
    );
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <div id='app' className='container'>
      <header>
        <h1 className='title'>todo</h1>
      </header>

      <main>
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </main>
    </div>
  );
};

export default App;

