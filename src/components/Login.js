import React, { Component } from "react";
import { connect } from "react-redux";

import InputSection from "./common/InputSection";
import CheckboxSection from "./common/CheckboxSection";
class Login extends Component {
  changeEmailHandler(event) {
    console.log(event.target.value);
  }
  changePasswordHandler(event) {
    console.log(event.target.value);
  }
  changeRememberHandler(event) {
    console.log(event.target.checked);
  }

  render() {
    return (
      <div className="login-content">
        <InputSection
          onChange={this.changeEmailHandler.bind(this)}
          label="Email or username"
          placeholder="username"
        />

        <InputSection
          onChange={this.changePasswordHandler.bind(this)}
          type="password"
          label="Password"
          placeholder="password"
        />

        <div className="forgot">
          <a onclick="javascript:void(0);">Forgot Password</a>
        </div>

        <CheckboxSection
          onChange={this.changeRememberHandler.bind(this)}
          label="Remenber me"
        />
      </div>
    );
  }
}

export default Login;
