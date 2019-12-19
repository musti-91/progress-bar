import React, { Component } from "react";

import ScrollProgress from "@codereview/progress-bar";

export default class App extends Component {
  render() {
    return (
      <div style={{ height: 8000 }}>
        <ScrollProgress />
      </div>
    );
  }
}
