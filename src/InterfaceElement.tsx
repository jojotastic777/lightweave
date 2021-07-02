import React from "react";
import "./InterfaceElement.css";

class App extends React.Component {
  public render() {
    return (
      <div className="InterfaceElement">
        { this.props.children }
      </div>
    );
  }
}

export default App;
