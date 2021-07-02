import React from "react";
import "./App.css";
import Clock from "./Clock";
import Network from "./Network";
import Versions from "./Versions";
import Wifi from "./Wifi";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Clock />
        <div className="flexContainer">
          <Versions />
          <Network />
          <Wifi />
        </div>
      </div>
    );
  }
}

export default App;
