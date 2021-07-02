import React from "react";
import InterfaceElement from "./InterfaceElement";
import "./Wifi.css"

class Wifi extends React.Component {
  public interval: NodeJS.Timeout | undefined;
  public state: { wifis: string }

  constructor(props: {}) {
    super(props);
    this.state = { wifis: "" };
    (window as any).api.network.getWifis().then((wifis: string) => this.state = { wifis })
  }

  public componentDidMount() {
    this.interval = setInterval(() => (window as any).api.network.getWifis().then((wifis: any) => this.setState({ wifis })), 5000)
  }

  public componentWillUnmount() {
    clearInterval(this.interval as NodeJS.Timeout)
  }

  public render() {
    return (
      <InterfaceElement>
        <div className="Wifi">
          <code>iwgetid</code> output:
          <pre>{ this.state.wifis }</pre>
        </div>
      </InterfaceElement>
    )
  }
}

export default Wifi;