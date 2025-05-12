import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      isDisabled: false,
    };

    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle() {
    this.setState({
      title: "New title",
      isDisabled: true,
    });
  }

  render() {
    return (
      <button
        disabled={this.state.isDisabled}
        className={this.props.className}
        onClick={this.changeTitle}
      >
        {this.state.title}
      </button>
    );
  }
}

export default Button;
