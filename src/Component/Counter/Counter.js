import React, { useState } from "react";
import Welcome from "../Layout/Welcome";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increamentHandler = () => {
    setCount(count + 1);
  };
  const decrimentHandler = () => {
    count > 0 && setCount(count - 1);
  };

  //welcome style
  const style = {
    color: "red",
    marginBottom: "25px",
    fontFamily: "cursive",
  };

  return (
    <div>
      <Welcome fontStyle={style} />
      <h2>Total Count = {count}</h2>
      <button onClick={increamentHandler}>+</button>
      <button onClick={decrimentHandler}>-</button>
    </div>
  );
};

export default Counter;
