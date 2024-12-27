import { DELETE, GET, POST } from "../api";

export const addRolesServices = async (data) => {
  const api = await POST("/roles", data);

  if (!api.status) {
    throw new Error(api.message);
  }

  return api;
};

export const getRoles = async () => {
  const res = await GET("/roles");

  if (!res.status) {
    throw new Error(res.message);
  }

  return res.data;
};

export const deleteRole = async (id) => {
  const res = await DELETE("/roles", id);

  if (!res.status) {
    throw new Error(res.message);
  }
  return res;
};
