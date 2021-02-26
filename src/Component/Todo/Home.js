import React, { useState } from "react";

const Home = () => {
  const [name, setname] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setname(value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([...name, name]);
    setname("");
    console.log(todos);
    // const develperName = name;
    // console.log(developName);
  };
  return (
    <div>
      <h1>Developer Details Receiver</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Developer Nmae: </label>
        <input type="text" value={name} onChange={onChangeHandler} />
        <br />
        <label htmlFor="details">Developer Details: </label>
        <input type="text" />
        <br />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo, index) => {
        return <h1 key={index}>{todo}</h1>;
      })}
    </div>
  );
};

export default Home;
