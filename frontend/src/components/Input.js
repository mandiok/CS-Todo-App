
import { FaPlusSquare } from "react-icons/fa";
import { useRef } from "react";
import styled from "styled-components";

const Input = ({ addTodo }) => {
  const todoNameRef = useRef();

  const newTodoItem = () => {
    if (todoNameRef.current.value !== "") {
      addTodo(todoNameRef.current.value);
      todoNameRef.current.value = "";
    }
  }

  const handleAddClick = () => {
    newTodoItem();
  }

  const newTodoItemKeyPress = e => {
    if (e.keyCode === 13) {
      newTodoItem();
    }  
  }

  return (
    <InputContainer>
      <div>
        <input ref={todoNameRef} onKeyDown={newTodoItemKeyPress} />
      </div>
      <div>
        <FaPlusSquare onClick={handleAddClick} />
      </div>
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row;
  & > div {
    display: flex; 
    align-items: center;
    padding: 10px;
  }
`
