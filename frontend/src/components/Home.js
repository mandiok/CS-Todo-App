import Todo from "./Todo";
import Input from "./Input";

import { useTodoAppContext } from "../providers/TodoAppContext";

const Home = () => {
  const { todos, setTodos, addTodo, deleteTodo, toggleTodo } = useTodoAppContext();

  return (
    <div>
      <Input addTodo={addTodo} />
      {
          todos ?
          todos.map(e => (
            <Todo title={e.text} todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} todoId={e.id} todo={e} />
          )) : null
        }
    </div>
  )
}

export default Home;