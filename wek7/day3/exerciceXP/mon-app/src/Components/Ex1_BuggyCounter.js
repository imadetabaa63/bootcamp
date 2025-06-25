import React from "react";

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error("J'ai planté !");
    }

    return <h3 onClick={this.handleClick}>Compteur : {this.state.counter}</h3>;
  }
}

export default BuggyCounter;
