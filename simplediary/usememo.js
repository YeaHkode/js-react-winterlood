import { useState } from "react";

const hardCalculate = (number) => {
  console.log("hard calculate");
  for (let i = 0; i < 999999999999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("easy calculate");
  return number + 1;
};

const App = () => {
  const [hardNumber, setHardNumber] = useState("1");
  const [easyNumber, setEasyNumber] = useState("1");

  const hardSum = () => {
    return hardCalculate(hardNumber);
  };

  const easySum = () => {
    return easyCalculate(easyNumber);
  };

  return (
    <div>
      <h3>hard Calculator</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => {
          setHardNumber(parseInt(e.target.value));
        }}
      ></input>
      <span> + 10000 = {hardSum}</span>

      <h3>easy Calculator</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => {
          setEasyNumber(parseInt(e.target.value));
        }}
      ></input>
      <span> + 10000 = {easySum}</span>
    </div>
  );
};

export default App;
