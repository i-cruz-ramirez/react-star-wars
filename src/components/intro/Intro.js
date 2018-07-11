import React, { Component } from "react";
import { TweenLite } from "gsap";

import "./Intro.css";

export default class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container">
        <section className="intro" ref={this.props.reff}>
          <p> A long time ago</p>
        </section>
      </section>
    );
  }
}
