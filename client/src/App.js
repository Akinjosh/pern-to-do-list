import "./App.css";
import InputTodos from "./components/inputTodos";
import ListTodos from "./components/listTodos";
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodos />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
