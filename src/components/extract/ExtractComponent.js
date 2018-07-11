import React, { Component } from "react";
import { TweenLite } from "gsap";

import "./ExtractComponent.css";

export default class ExtractComponent extends Component {
  constructor(props) {
    super(props);
    this.intro = React.createRef();
  }

  componentDidMount() {}

  render() {
    return <div />;
  }
}
