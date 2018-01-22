import React, { Component } from "react";

class InputSection extends Component {
  renderLabel() {
    if (this.props.label)
      return <div className="input-section-label">{this.props.label}</div>;
    return null;
  }
  render() {
    return (
      <div className=" input-section {this.props.className}">
        {this.renderLabel()}
        <input
          type={this.props.type || "text"}
          className="input"
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default InputSection;
