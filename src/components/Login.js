import React, { Component } from "react";
import { connect } from "react-redux";

import InputSection from "./common/InputSection";
import CheckboxSection from "./common/CheckboxSection";
import ButtonSection from "./common/ButtonSection";
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
  onSubmitHandler(event) {
    console.log("submit");
    event.preventDefault();
  }
  render() {
    return (
      <div className="login-content">
        <form onSubmit={this.onSubmitHandler.bind(this)}>
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
            <a onClick="javascript:void(0);">Forgot Password</a>
          </div>

          <CheckboxSection
            onChange={this.changeRememberHandler.bind(this)}
            label="Remenber me"
          />
          <div className="button-login-content">
            <ButtonSection label="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
