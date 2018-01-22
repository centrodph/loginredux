import React, { Component } from "react";

class CheckboxSection extends Component {
  renderLabel() {
    if (this.props.label)
      return <div className="input-section-label">{this.props.label}</div>;
    return null;
  }
  render() {
    return (
      <div className=" input-section {this.props.className}">
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={this.props.onChange}
            defaultChecked={this.props.checked}
          />
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default CheckboxSection;
