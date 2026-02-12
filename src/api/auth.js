import { base_url } from "./config";
export const auth = (token, setUser) => {
  fetch(`${base_url}/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    credentials: "include",
  })
    .then((req) => {
      if (req.status === 401) {
        navigate("/login");
      } else {
        return req.json();
      }
    })
    .then((res) => {
      setUser(res);
    });
};
