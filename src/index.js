import React from "react";
import ReactDOM from "react-dom";
import IntroComponent from "./intro/IntroComponent";
import ExtractComponent from "./extract/ExtractComponent";
import LogoComponent from "./logo/LogoComponent";
import { TweenLite } from "gsap";

import "./styles.css";

function App() {
  return <IntroComponent />;
}

ReactDOM.render(<App />, document.getElementById("root"));
