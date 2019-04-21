// { Component } imports a submodule
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Zones from "./components/Zones";

class App extends Component {
  render() {
    return (
      <div>
        Hello, React!
        <Zones />
      </div>
    );
  }
}

// only point our react code will hit the dom
// finds root id and takes over that tag
// don't user ReactDOM.render anywhere else
ReactDOM.render(<App />, document.getElementById("root"));
