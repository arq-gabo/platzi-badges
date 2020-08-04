// const element = document.createElement("h1");
// element.innerHTML = "Hello Platzi Badges sin React!";

// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

//const jsx = <h1>Hello, Platzi Badges from React!</h1>

// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Go to platzi"
// );

//const name = "gabo";
//const element = React.createElement("h1", {}, `Hello, i am ${name}`);

// const jsx = <h1>Hello, i am {null}</h1>;

// const jsx = (
//   <div>
//     <h1>Hola, i am Gabriel</h1>
//     <p>Programmer Student</p>
//   </div>
// );
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hello, i am Gabo"),
  React.createElement("p", {}, "I am web developer")
);

const container = document.getElementById("app");

//ReactDOM.render(__Que Vas a Renderizar__, __Donde Vamos a Renderizar__)
ReactDOM.render(element, container);
//ReactDOM.render(jsx, container);
