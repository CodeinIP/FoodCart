import React, { useEffect, useState } from "react";

const TodosApi = () => {
  const [todos, setTodos] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const getTodos = async () => {
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
    //   console.log(res);
      let data = await res.json();
      //   console.log(data);
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTodos();
    document.title = `Page is ${page}`;
    // console.log(page);
  }, [page,limit]);

  return (
    <div>
      <h1>todos</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "400px",
          margin: "auto",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage(page=>page - 1)}
        >{`<`}</button>
        <select onChange={(e)=>setLimit(e.target.value)} >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
        <button onClick={() => setPage(page=>page + 1)}>{`>`}</button>
      </div>
      <ol>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default TodosApi;
