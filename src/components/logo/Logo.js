import React, { Component } from "react";
import { Power2, TimelineLite } from "gsap";

import "./Logo.css";
import logo from "./logo.png";

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="logo" ref={this.props.reff}>
        <img src={logo} alt="Code Wars logo" />
      </section>
    );
  }
}
