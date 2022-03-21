import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "Tam";
  const age = 22;
  const isMale = true;
  const student = {
    name: "Easy Frontend",
  };
  const colorList = ["red", "green", "blue"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name} - {age} - {isMale ? "Male" : "Female"}
        </p>
        {isMale && (
          <div>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </div>
        )}
        {isMale && (
          <React.Fragment>
            <p>Male1</p>
            <p>Male2</p>
            <p>Male3</p>
          </React.Fragment>
        )}
        <p>{student.name}</p>
      </header>
    </div>
  );
}

export default App;
