import { useState } from "react";
import ToDo from "./ToDo";

const SimpleTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [textValue, setTextValue] = useState("");

  const addTodoItem = (event) => {
    setTodoList([...todoList, textValue]);
    setTextValue("");
  }
  
  return (
    <>
      <input type="text" value={textValue} onChange={(event) => setTextValue(event.target.value)}></input>
      <button onClick={(event) => addTodoItem(event)}>Add</button>
      <ToDo todoList={todoList}/>
    </>
  );
}

export default SimpleTodoList;
