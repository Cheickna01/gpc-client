import { createContext, useEffect, useState } from "react";
import { fetchAuth } from "../api/fetchAuth";
import { base_url } from "../api/config";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState("");

  const [token, setToken] = useState("");

  // useEffect(() => {
  //   fetch(`${base_url}/me`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   })
  //     .then((req) => {
  //       if (req.status === 401) {
  //         logout();
  //       } else {
  //         return req.json();
  //       }
  //     })
  //     .then((res) => {
  //       login(res);
  //     });
  // }, []);

  return (
    <UserContext.Provider value={{ user, token, setToken, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
