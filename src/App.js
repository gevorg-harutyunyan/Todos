import { useState, useCallback } from 'react';
import './App.css';
import { Todo } from './Todo';

function App() {

  const [todos, setTodos] = useState([])

  const changeTodo = useCallback((newValue, id) => {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo === todos.find(todo => todo.id === id)) {
          return {
            id: todo.id,
            value: newValue
          }
        }
        return todo
      })
    }
    )
  }, [])


  const removeTodo = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [])


  return (
    <div className="App">

      <button onClick={() => {
        setTodos([...todos,
        {
          id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
          value: ""
        }])
      }}>Add</button>

      {todos.map((todo) => {
        return <Todo
          key={todo.id}
          todo={todo}
          setTodo={changeTodo}
          removeTodo={removeTodo}
        />
      })}

    </div>
  );
}

export default App;
