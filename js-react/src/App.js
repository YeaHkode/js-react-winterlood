import React from "react";
// import "./App.css";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

function App() {
  let name = "kang";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    b: {
      color: "green",
    },
  };

  return (
    <div style={style.App}>
      <MyHeader />

      <h2 style={style.h2}>안녕 리액트 {name}</h2>
      <b style={style.b}>React.js</b>
      <MyFooter />
    </div>
  );
}

export default App;
