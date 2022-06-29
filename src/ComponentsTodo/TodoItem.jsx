import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div key={todo.id}>
      <li
        style={{
          width: "80%",
          height:"20px",
          margin: "5px auto",
          overflow: "hidden",
          // border: "1px solid",
          color:"olivedrab"
          
        }}
      >
        {todo.title}
      </li>
    </div>
  );
};

export default TodoItem;
