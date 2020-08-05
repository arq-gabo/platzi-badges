import React from "react";
import ReactDOM from "react-dom";

import Badge from "./components/Badges";

const element = (
  <div>
    <h1>Hola, soy Gabriel</h1>
    <p>Soy Ingeniero FrontEnd</p>
  </div>
);

const container = document.getElementById("app");

ReactDOM.render(<Badge />, container);
