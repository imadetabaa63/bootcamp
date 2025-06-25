import React from "react";

class ColorLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "rouge" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "jaune" });
    }, 1000);
  }

  changeColor = () => {
    this.setState({ favoriteColor: "bleu" });
  };

  render() {
    return (
      <div>
        <h3>Ma couleur préférée est : {this.state.favoriteColor}</h3>
        <button onClick={this.changeColor}>Changer en bleu</button>
      </div>
    );
  }
}

export default ColorLifecycle;
