import React, { useState } from "react";
import { observer } from "mobx-react";

import toDo from "../models/toDo";

const toDoList = new toDo();

function ToDo() {
  const [number, setNumber] = useState(1);

  const { list } = toDoList;

  function handleClick() {
    toDoList.addTodo(`to do ${number}`);
    setNumber(number + 1);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={() => handleClick()}>Add To Do</button>
      <ul>
        {list.map((toDo) => (
          <li>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default observer(ToDo);
