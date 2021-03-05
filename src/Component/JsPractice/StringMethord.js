import React from "react";

const StringMethord = () => {
  const name1 = ["rahim", "Sumon", "Karim", "Jamil", "Rabbani", "Sagor"];
  const name2 = ["fahiha", "Adiba", "Sanjana", "Karisma"];
  const allName = name1.concat(name2);
  console.log(allName);
  const name1Sort = name1.sort();
  console.log(name1Sort);
  const name1SortJ = name1Sort.join(", ");
  console.log(name1SortJ);
  // const name1Slice = name1.splice(2, 0, "Sabuj", "Abir");
  const name1Slice = name1.splice(3, 2); //splice don't work correctly
  console.log(name1Slice);

  const number = [5, 35, 25, 15, 41, 24, 5, 9];

  const sum = (total, index) => {
    return total + index;
  };
  const summation = number.reduce(sum);
  console.log(summation); // Sum Methord

  let day;

  switch (new Date().getDay()) {
    default:
      day = "Day is counting";
      break;
    case 1:
      day = "frday";
      break;
    case 6:
      day = "saturday";
      break;
  }
  console.log(day);

  // callBack Function
  const displayer = (sum) => {
    return sum;
  };
  const calculator = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
  };
  // console.log(calculator());
  const result = calculator(5, 10);
  console.log(result);
  console.log(displayer(result));

  //acynchronous methord

  const displayer2 = (mainResult) => {
    return mainResult;
  };

  const calculator2 = (numb1, numb2, callBack) => {
    const sum = numb1 + numb2;
    callBack(sum);
  };

  calculator2(5, 12, displayer2); // dont working

  return (
    <div>
      <h1>{displayer2()}</h1>
    </div>
  );
};

export default StringMethord;
