import React, { Component } from "react";
import { connect } from "react-redux";

import InputSection from "./common/InputSection";
import CheckboxSection from "./common/CheckboxSection";
import ButtonSection from "./common/ButtonSection";

import * as actions from "../actions";

class Login extends Component {
  changeEmailHandler(event) {
    this.props.loginEmailChanged(event.target.value);
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
            value={this.props.email}
          />

          <InputSection
            onChange={this.changePasswordHandler.bind(this)}
            type="password"
            label="Password"
            placeholder="password"
            value={this.props.password}
          />

          <div className="forgot">
            <a onClick={() => void 0}>Forgot Password</a>
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

const mapStateToProps = ({ login }) => {
  const { email, password, error, auth } = login;
  return { email, password, error, auth };
};

export default connect(mapStateToProps, actions)(Login);
