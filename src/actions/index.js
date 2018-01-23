import { LOGIN_EMAIL_CHANGED, LOGIN_PASSWORD_CHANGED, LOGIN_REMEMBER_CHAGED, LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR } from './type';

export const loginEmailChanged = text => {
	return {
		type: LOGIN_EMAIL_CHANGED,
		payload: text
	};
};

export const loginPasswordChanged = text => {
	return {
		type: LOGIN_PASSWORD_CHANGED,
		payload: text
	};
};

export const loginRememberChanged = check => {
	return {
		type: LOGIN_REMEMBER_CHAGED,
		payload: check
	};
};

export const logginSubmitted = ({ email, password, remember }) => {
	return dispatch => {
		if (email === 'test' && password === '123') {
			return dispatch({ type: LOGIN_SUCCESS, payload: 'Welcome Test!' });
		}
		return dispatch({ type: LOGIN_ERROR, payload: 'Bad username or password' });
	};
};
