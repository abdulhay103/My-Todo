import React, { useState } from "react";

const JsPractice = () => {
  //1st condition
  const whatDo = (time) => {
    if (time <= 8) {
      return <span>We get permission to start our work</span>;
    } else {
      return <span>We can't get permission to start our work</span>;
    }
  };

  //2nd Condition
  //   const practise = ["Good", "Modarate", "Bad"];
  const ourCondition = (practise) => {
    // for (i = 0; i < practise.length; i++) {
    //   return <span>go</span>;
    // }
    if (practise === "Good") {
      return <span>Do Well</span>;
    } else if (practise === "Modarate") {
      return <span>Do Simple</span>;
    } else if (practise === "Bad") {
      return <span>Do Bad</span>;
    } else {
      return <span>Do Nothing!!</span>;
    }
  };

  //3rd condition

  const [way, setWay] = useState("");
  const [getResult, setGetResult] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setGetResult(way);
    setWay("");
  };

  const result = () => {
    const time = [35, 40, 50];
    if (getResult === "bus") {
      return (
        <span>
          It take minimum <strong>{time[1]}</strong> minutes.
        </span>
      );
    } else if (getResult === "walking") {
      return (
        <span>
          It take minimum <strong>{time[2]}</strong> minutes.
        </span>
      );
    } else if (getResult === "cycle") {
      return (
        <span>
          It take minimum <strong>{time[0]}</strong> minutes.
        </span>
      );
    } else if (getResult === "") {
      return <h4> Please Set A Value</h4>;
    } else {
      return <h1>Are You Mad?</h1>;
    }
  };

  return (
    <div>
      <p>1st Statement is... {whatDo(8)}</p>
      <p>2nd Statement is... we will {ourCondition("Bad")}</p>
      <p>3rd condition is...</p>
      <h3>{result()}</h3>

      <form action="" onSubmit={submit}>
        <p>Please chouse one of them "walking, cycle or bus"</p>
        <input
          type="text"
          value={way}
          onChange={(e) => {
            setWay(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JsPractice;
