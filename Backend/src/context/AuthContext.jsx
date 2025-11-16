import { createContext, useEffect, useState } from "react";
import { getAccessToken, clearTokens } from "../api/token";
import api from "../api/axios";

export const AuthContext = createContext();
///idk
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // name, email, role
  const [loading, setLoading] = useState(true);

  // Load user from token automatically
  useEffect(() => {
    async function loadUser() {
      const token = getAccessToken();
      if (!token) return setLoading(false);

      try {
        const res = await api.get("/auth/me"); // backend decodes token
        setUser(res.data);
      } catch (e) {
        clearTokens();
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
