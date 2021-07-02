import React from "react";
import "./Clock.css"

class Clock extends React.Component {
  public interval: NodeJS.Timeout | undefined;
  public state: { time: string }

  constructor(props: {}) {
    super(props);
    this.state = { time: (new Date()).toLocaleTimeString() }
  }

  public componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: (new Date()).toLocaleTimeString() }), 1000)
  }

  public componentWillUnmount() {
    clearInterval(this.interval as NodeJS.Timeout)
  }

  public render() {
    return (
      <div className="Clock">
        { this.state.time }
      </div>
    );
  }
}

export default Clock;