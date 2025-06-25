import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("Non monté !");
  }

  render() {
    return <h3>Hello World !</h3>;
  }
}

class UnmountDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  toggleShow = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        {this.state.show && <Child />}
        <button onClick={this.toggleShow}>Supprimer</button>
      </div>
    );
  }
}

export default UnmountDemo;
