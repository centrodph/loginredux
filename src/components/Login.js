import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputSection from './common/InputSection';
import CheckboxSection from './common/CheckboxSection';
import ButtonSection from './common/ButtonSection';

import * as actions from '../actions';

class Login extends Component {
	changeEmailHandler(event) {
		this.props.loginEmailChanged(event.target.value);
	}
	changePasswordHandler(event) {
		this.props.loginPasswordChanged(event.target.value);
	}
	changeRememberHandler(event) {
		this.props.loginRememberChanged(event.target.checked);
	}
	onSubmitHandler(event) {
		const { email, password, remember } = this.props;
		this.props.logginSubmitted({ email, password, remember });
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

					<CheckboxSection onChange={this.changeRememberHandler.bind(this)} checked={this.props.remember} label="Remenber me" />
					<div className="button-login-content">
						{this.props.error} {this.props.user}
						<ButtonSection label="Login" />
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ login }) => {
	const { email, password, remember, error, user, auth } = login;
	return { email, password, remember, error, user, auth };
};

export default connect(mapStateToProps, actions)(Login);
