import React, { Component } from "react";

class ButtonSection extends Component {
  render() {
    return (
      <div className=" input-section {this.props.className}">
        <button className="button " onClick={this.props.onClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default ButtonSection;
