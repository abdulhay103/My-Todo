import React, { useState } from "react";

const Home = () => {
  const [developer, setDeveloper] = useState({
    name: "",
    details: "",
  });
  const { name, details } = developer;
  const [todos, setTodos] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { name, details }]);
    console.log(developer);
  };
  return (
    <div>
      <h1>Developer Details Receiver</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Developer Nmae: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setDeveloper({ name: e.target.value })}
        />
        <br />
        <label htmlFor="details">Developer Details: </label>
        <input
          type="text"
          value={details}
          onChange={(e) => setDeveloper({ details: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo, index) => {
        // console.log(todo.name);
        return <h1 key={index}>{todo.name}</h1>;
      })}
      {/* {console.log(todos)} */}
    </div>
  );
};

export default Home;
