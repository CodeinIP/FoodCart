import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoList from "./TodoList";
const Todo = () => {
  const [todos, setTodos] = useState();
  const getTodos = async () => {
    try {
      let res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      let data = await res.json();
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  const style1 = {
    width: "300px",
    margin: "auto",
    textAlign: "left",
  };
  return (
    <div style={style1}>
      <h1 style={{ textAlign: "center" }}>Todos</h1>
      <div>
        {todos ? (
          <TodoList todos={todos} />
        ) : (
          <h3 style={{ color: "orange",textAlign:"center" }}>Loading...</h3>
        )}
      </div>
    </div>
  );
};

export default Todo;
