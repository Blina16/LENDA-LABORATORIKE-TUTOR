import api from "./axios";
import { saveTokens } from "../api/token";

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });

  saveTokens(res.data.accessToken, res.data.refreshToken);

  return res.data;
};

export const registerUser = async (data) => {
  return api.post("/auth/register", data);
};

export const logout = () => {
  localStorage.clear();
};
