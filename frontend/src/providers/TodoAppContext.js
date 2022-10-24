import { createContext, useContext } from "react";

import useTodos from "../hooks/useTodos";

const TodoAppContext = createContext();

const useTodoAppContext = () => useContext(TodoAppContext);

const TodoAppContextProvider = ({ children }) => {
  const [todos, setTodos, addTodo, deleteTodo, toggleTodo] = useTodos();

  return (
    <TodoAppContext.Provider value={{ todos, setTodos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodoAppContext.Provider>
  )
}

export { TodoAppContextProvider, useTodoAppContext }