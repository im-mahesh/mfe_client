import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import MyName from "home/MyName";

const App = () => (
  <div className="container">
    <div>Micro Front End Client</div>
    <br />
    <MyName name={"Mahesh"} age={27} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
