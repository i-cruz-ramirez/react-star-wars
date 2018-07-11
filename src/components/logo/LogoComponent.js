import React, { Component } from "react";
import { Power2, TimelineLite } from "gsap";
import "./LogoComponent.css";

export default class LogoComponent extends Component {
  constructor(props) {
    super(props);
    this.logo = React.createRef();
  }
  componentDidMount() {
    const tl = new TimelineLite();
    tl
      .set(this.logo.current, { opacity: 1, scale: 2.75 })
      .to(this.logo.current, 8, {
        scale: 0.05,
        ease: Power2.easeOut
      })
      .to(this.logo.current, 1.5, { opacity: 0 }, "-=1.5");
  }

  render() {
    return (
      <section className="logo" ref={this.logo}>
        <img src="/images/logo.png" alt="Code Wars logo" />
      </section>
    );
  }
}
