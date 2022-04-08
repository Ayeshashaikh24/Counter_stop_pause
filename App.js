
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      count: 0,
      stopVal: 0
    };
    this.toggleBtn = this.toggleBtn.bind(this);
    this.countBegin = this.countBegin.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.stopHandler = this.stopHandler.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.countBegin();
    }, 1000);
  }
  toggleBtn() {
    this.setState({ toggle: !this.state.toggle });
  }

  countBegin() {
    if (this.state.toggle) {
      if (this.state.count <= 0) {
        return;
      }
      this.setState({ count: this.state.count + 1 });
    }
  }

  inputHandler(e) {
    this.setState({ count: +e.target.value });
  }

  stopHandler() {
    this.setState({ count: this.state.stopVal });
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    let x = this.state.toggle;
    let y = this.state.count;
    return (
      <div>
        <input
          type="number"
          value={this.state.count}
          onChange={this.inputHandler}
          required
        />
        <h1>{this.state.count}</h1>
        <button onClick={this.toggleBtn}>{x && y ? "Pause" : "Start"}</button>
        {x && y ? <button onClick={this.stopHandler}>Stop</button> : ""}
      </div>
    );
  }
}
export default App;