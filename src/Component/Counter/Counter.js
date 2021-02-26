import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increamentHandler = () => {
    setCount(count + 1);
  };
  const decrimentHandler = () => {
    {
      count > 0 && setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Total Count = {count}</h2>
      <button onClick={increamentHandler}>+</button>
      <button onClick={decrimentHandler}>-</button>
    </div>
  );
};

export default Counter;
