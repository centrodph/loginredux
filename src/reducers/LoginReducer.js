import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS
} from "../actions/type";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: "",
  auth: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
