import React from "react";
// import "./App.css";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import Counter from "./Counter";

function App() {
  const CounterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };

  return (
    <div>
      <MyHeader />
      <Counter {...CounterProps} />
      <MyFooter />
    </div>
  );
}

export default App;
