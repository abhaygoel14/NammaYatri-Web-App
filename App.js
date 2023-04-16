import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/component/Heading";
import { myName } from "./src/component/Heading";
import "./style.css";

const Body = () => {
  return <h1>Hello {myName} </h1>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Heading />
      <Body />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
