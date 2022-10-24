import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useTodoAppContext } from "../providers/TodoAppContext";

const Todo = ({title, todoId, todo}) => {
  const { todos, setTodos, addTodo, deleteTodo, toggleTodo } = useTodoAppContext();

  const { id } = useParams();

  const handleDeleteTodoClick = (e, paramTodoId) => {
    if (paramTodoId) deleteTodo(paramTodoId);
    else deleteTodo(todoId);
  }

  const handleToggleTodoClick = (e, paramTodoId) => {
    if (paramTodoId) toggleTodo(paramTodoId);
    else toggleTodo(todoId);
  }

  if (id && todos) {
    const paramTodo = todos.find(e => String(e.id) === id);
    if (paramTodo) {return (
      <TodoContainer done={paramTodo?.done}>
        {paramTodo?.text} <FaCheck onClick={e => handleToggleTodoClick(e, paramTodo.id)} /> <FaRegTrashAlt onClick={e => handleDeleteTodoClick(e, paramTodo.id)} />
      </TodoContainer>
    )} else return <div>404 Todo nicht gefunden</div>;
  } else {
    return (
      <TodoContainer done={todo?.done}>
        {title} <FaCheck onClick={handleToggleTodoClick} /> <FaRegTrashAlt onClick={handleDeleteTodoClick} />
      </TodoContainer>
    );
  }

}

export default Todo;

const TodoContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #41B3A3;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 15px;
  margin-bottom: 10px;
  text-decoration: line-through;
  text-decoration: ${props => props.done ? "line-through" : "none"}
`
