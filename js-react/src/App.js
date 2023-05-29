import React from "react";
import "./App.css";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

function App() {
  let name = "kang";

  return (
    <div className="App">
      <MyHeader />

      <h2>안녕 리액트 {name}</h2>
      <b id="bold_text">React.js</b>
      <MyFooter />
    </div>
  );
}

export default App;
