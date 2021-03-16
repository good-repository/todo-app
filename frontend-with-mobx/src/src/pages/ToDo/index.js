import React, { useState } from "react";
import { observer } from "mobx-react";

import toDo from "../../store/models/toDo";

const toDoList = new toDo();
// observer(toDoList);
//erro

export default function ToDo() {
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
