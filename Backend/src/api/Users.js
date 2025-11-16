import axios from "axios";

export function createUser(payload) {
  return axios.post("http://localhost:5000/api/users", payload);
}
