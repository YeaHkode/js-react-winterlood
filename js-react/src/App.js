import React from "react";
// import "./App.css";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const CounterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };

  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...CounterProps} />
        <MyFooter />
      </div>
    </Container>
  );
}

export default App;
