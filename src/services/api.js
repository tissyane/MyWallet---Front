import axios from "axios";

const URL = "http://localhost:5000";

/* Requições Post */

function signUp(body) {
  return axios.post(`${URL}/sign-up`, body);
}

function signIn(body) {
  return axios.post(`${URL}/sign-in`, body);
}
export { signUp, signIn };
