import React, { Fragment, useState } from "react";
import Welcome from "../Layout/Welcome";
import Counter2 from "./Counter2";

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
    <Fragment>
      <Welcome fontStyle={style} />
      <h2>Total Count = {count}</h2>
      <button type="button" onClick={increamentHandler}>
        +
      </button>
      <button type="button" onClick={decrimentHandler}>
        -
      </button>
      <Counter2 />
    </Fragment>
  );
};

export default Counter;
