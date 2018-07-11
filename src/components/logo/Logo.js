import React, { Component } from "react";
import { Power2, TimelineLite } from "gsap";

import "./Logo.css";

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="logo" ref={this.props.reff}>
        <img src="/images/logo.png" alt="Code Wars logo" />
      </section>
    );
  }
}
