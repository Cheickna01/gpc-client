import { toast } from "react-toastify";
import { base_url } from "./config";

export const logout = (navigate) => {
  try {
    fetch(`${base_url}/logout`, {
      method: "GET",
      credentials: "include",
    }).then((req) => {
      navigate("/login");
    });
  } catch (error) {
    console.log(error)
    toast.error("Une erreur est survenue!")
  }
};
