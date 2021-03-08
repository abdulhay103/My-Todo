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
    console.log(todos);
    setDeveloper({
      name: "",
      details: "",
    });
  };
  return (
    <div>
      <h1>Developer Details Receiver</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Developer Nmae: </label>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setDeveloper({ ...developer, name: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="details">Developer Details: </label>
        <textarea
          placeholder="developer details.."
          type="text"
          value={details}
          onChange={(e) =>
            setDeveloper({ ...developer, details: e.target.value })
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>show result</h1>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <p>
              <span>{todo.name}</span>
              <span>{todo.details}</span>
            </p>
          </div>
        );
      })}
      {/* {console.log(todos)} */}
    </div>
  );
};

export default Home;
