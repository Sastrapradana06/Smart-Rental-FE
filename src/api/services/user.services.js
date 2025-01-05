import { GET, POST, PUT } from "../api";
import Cookies from "js-cookie";
export const loginUserServices = async (email, password) => {
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

export const getUserServices = async () => {
  const api = await GET("/users");

  if (!api.status) {
    throw new Error(api.message);
  }

  return api.data;
};

export const addUserServices = async (data) => {
  const api = await POST("/users", data);

  if (!api.status) {
    throw new Error(api.message);
  }

  return api;
};

export const deleteUserServices = async (id) => {
  const res = await POST("/users/delete-records", id);

  if (!res.status) {
    throw new Error(res.message);
  }
  return res;
};

export const getUserIdServices = async (id) => {
  const res = await GET(`/users/${id}`);

  if (!res.status) {
    throw new Error(res.message);
  }

  return res.data;
};

export const editUserServices = async ({ id, data }) => {
  const edit = await PUT(`/users/${id}`, data);

  if (!edit.status) {
    throw new Error(edit.message);
  }
  return edit;
};
