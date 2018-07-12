import React, { Component } from "react";
import { TimelineLite, Power2 } from "gsap";

import Intro from "../intro/Intro";
import Extract from "../extract/Extract";
import Logo from "../logo/Logo";

import "./App.css";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { numStars: 300 }

    this.root = React.createRef();
    this.extract = React.createRef();
    this.intro = React.createRef();
    this.logo = React.createRef();

    this.createStar = this.createStar.bind(this);
    this.generateStars = this.generateStars.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  createStar(top, left) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = `${top}px`;
    star.style.left = `${left}px`;
    this.root.current.append(star);
  }

  generateStars() {
    [...Array(this.state.numStars).keys()].forEach(() => {
      const [x, y] = this.getPosition();
      this.createStar(x, y);
    });
  }

  getPosition() {
    const y = window.innerWidth;
    const x = window.innerHeight;
    return [Math.floor(Math.random() * x), Math.floor(Math.random() * y)];
  }

  componentDidMount() {
    this.generateStars();
    const tl = new TimelineLite();
    tl
      .to(this.intro.current, 2.5, { opacity: 1, delay: 1 })
      .to(this.intro.current, 0.5, { opacity: 0, delay: 1 })
      .set(this.logo.current, {
        opacity: 1,
        scale: 2.75,
        delay: 0.5
      })
      .to(this.logo.current, 8, { scale: 0.05, ease: Power2.easeOut })
      .to(this.logo.current, 1.5, { opacity: 0 }, "-=1.5")
      .to(this.extract.current, 40, { top: "-190%" });
  }

  render() {
    return (
      <div id="root" ref={this.root}>
        <Logo reff={this.logo} />
        <Extract reff={this.extract} />
        <Intro reff={this.intro} />
      </div>
    );
  }
}
