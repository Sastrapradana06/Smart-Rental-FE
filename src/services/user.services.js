import { POST } from "../api";
import Cookies from "js-cookie";
export const loginUser = async (email, password) => {
  const api = await POST("/auth/login", { email, password });

  if (api.error) {
    throw new Error(api.error);
  }

  const { token, user } = api;
  Cookies.set("token", token, {
    expires: 1,
    secure: true,
    sameSite: "strict",
  });

  localStorage.setItem("user", JSON.stringify(user));
};
