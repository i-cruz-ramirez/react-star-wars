import React, { Component } from "react";
import { TweenLite } from "gsap";

import "./IntroComponent.css";

export default class IntroComponent extends Component {
  constructor(props) {
    super(props);
    this.intro = React.createRef();
  }

  componentDidMount() {
    TweenLite.to(this.intro.current, 3.5, { opacity: 1, delay: 1 });
    TweenLite.to(this.intro.current, 0.5, { opacity: 0, delay: 5.5 });
  }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <p> A long time ago</p>
        </section>
      </div>
    );
  }
}
