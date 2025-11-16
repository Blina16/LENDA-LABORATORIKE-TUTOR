import axios from "axios";
import { getAccessToken, getRefreshToken, saveTokens, clearTokens } from "../utils/token";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

// 🔹 Attach access token automatically
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 🔹 Auto-refresh token when expired
api.interceptors.response.use(
  res => res,
  async (err) => {
    const original = err.config;

    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        const refresh = getRefreshToken();
        const res = await axios.post("http://localhost:5000/auth/refresh", { refresh });

        saveTokens(res.data.accessToken, res.data.refreshToken);

        original.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return api(original);
      } catch (refreshError) {
        clearTokens();
        window.location.href = "/login";
      }
    }

    return Promise.reject(err);
  }
);

export default api;
