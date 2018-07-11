import React from "react";
import ReactDOM from "react-dom";
import IntroComponent from "./components/intro/IntroComponent";
import ExtractComponent from "./components/extract/ExtractComponent";
import LogoComponent from "./components/logo/LogoComponent";

import "./styles.css";

function App() {
  return <IntroComponent />;
}

const component = document.getElementById("root");
ReactDOM.render(<App />, component);
