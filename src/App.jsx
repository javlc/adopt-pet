import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Pet!"),
    React.createElement(Pet, {
      name: "Bailey",
      animal: "Dog",
      breed: "Yorkshire",
    }),
    React.createElement(Pet, {
      name: "Milú",
      animal: "Dog",
      breed: "Schnauzer",
    }),
    React.createElement(Pet, {
      name: "Minina",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
