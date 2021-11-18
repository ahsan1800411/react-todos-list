import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const [todos, setTodos] = useState(initTodo);

  // Add a todo function to add a todo

  const addTodo = (title, description) => {
    const newTodo = {
      sno: todos.length + 1,
      title,
      description,
    };
    setTodos([...todos, newTodo]);
  };

  // Delete a todo function
  function deleteTodo(todo) {
    setTodos(todos.filter((t) => t !== todo));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify([...todos]));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </BrowserRouter>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </>
  );
}

export default App;
