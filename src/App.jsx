import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      }
    ]);

    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value)
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  const onToggle = (todo) => {
    console.log('toggle', todo)
  }

  return (
    <div id='app' className='container'>
      <header>
        <h1 className='title'>todo</h1>
      </header>

      <main>
        <input type="text" className='new-todo' placeholder='o que precisa ser feito?' value={value}
          onChange={onChange} onKeyDown={onKeyDown} />
        <ul className='todo-list'>
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span className='todo'
                onClick={() => onToggle(todo)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === '') onToggle(todo);
                }}
                role='button'
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button className='remove' type='button'>
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

