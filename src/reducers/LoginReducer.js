import { LOGIN_EMAIL_CHANGED, LOGIN_PASSWORD_CHANGED, LOGIN_REMEMBER_CHAGED, LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/type';

const INITIAL_STATE = {
	email: '',
	password: '',
	remember: false,
	error: '',
	user: null,
	auth: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case LOGIN_PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_REMEMBER_CHAGED:
			return { ...state, remember: action.payload };
		case LOGIN_SUCCESS:
			console.log();
			return { ...state, error: '', user: action.payload, auth: true };
		case LOGIN_ERROR:
			return { ...state, error: action.payload, user: null, auth: false };
		default:
			return state;
	}
};
