import React, { Component } from "react";

class Input extends React.Component {
  componentDidMount() {
    console.log("INPUT MOUNTED");
  }

  componentDidUpdate() {
    console.log("INPUT UPDATED");
  }

  componentWillUnmount() {
    console.log("INPUT UNMOUNTED");
  }
  render() {
    console.log("INPUT RENDERED");
    return <input type="text" />;
  }
}

class ButtonClass extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
      showInput: true,
    };

    this.count = this.count.bind(this);
  }

  count() {
    this.setState({ counter: this.state.counter + 1, showInput: false });
  }

  componentDidMount() {
    console.log("MOUNTED");
  }

  componentDidUpdate() {
    console.log("UPDATED");
  }

  componentWillUnmount() {
    console.log("UNMOUNTED");
  }

  render() {
    console.log("Render");

    return (
      <>
        {this.state.showInput && <Input />}
        <button onClick={this.count}>
          {this.props.title}: {this.state.counter}
        </button>
      </>
    );
  }
}

export default ButtonClass;
