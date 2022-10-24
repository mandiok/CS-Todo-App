import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "local_storage_todos";

const useTodos = () => {
  const [todos, setTodos] = useState();

  const saveTodosToLocalStorage = todoArray => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoArray));
  }

  const loadTodosFromLocalStorage = () => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) 
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    else return [];
  }

  useEffect(() => {
    if (todos) saveTodosToLocalStorage(todos);
  }, [todos]);

  useEffect(() => {
    const storage = loadTodosFromLocalStorage();
    setTodos(storage);
  }, []);

  const addTodo = text => {
    setTodos([...todos, { 
      id: uuidv4(),
      text: text,
      done: false
    }]);
  }

  const deleteTodo = id => {
    setTodos(todos.filter(e => e.id !== id));
  }

  const toggleTodo = id => {
    setTodos(
      todos.map(
        e => { if (e.id === id) e.done = !e.done; return e }
      )
    );
  }

  return [todos, setTodos, addTodo, deleteTodo, toggleTodo];
}

export default useTodos;