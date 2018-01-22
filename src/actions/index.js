import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS
} from "./type";

export const loginEmailChanged = text => {
  console.log("action:", text);
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text
  };
};
