import { GET, POST, PUT } from "../api";

export const addRolesServices = async (data) => {
  const api = await POST("/roles", data);

  if (!api.status) {
    throw new Error(api.message);
  }

  return api;
};

export const getRolesServices = async () => {
  const res = await GET("/roles");

  if (!res.status) {
    throw new Error(res.message);
  }

  return res.data;
};

export const getRoleNameServices = async (name) => {
  const res = await GET(`/roles/${name}`);

  if (!res.status) {
    throw new Error(res.message);
  }

  return res.data;
};

export const getRoleIdServices = async (id) => {
  const res = await GET(`/roles/id/${id}`);

  if (!res.status) {
    throw new Error(res.message);
  }

  return res.data;
};

export const deleteRoleServices = async (id) => {
  const res = await POST("/roles/delete-records", id);

  if (!res.status) {
    throw new Error(res.message);
  }
  return res;
};

export const editRoleServices = async ({ id, data }) => {
  const edit = await PUT(`/roles/${id}`, data);

  if (!edit.status) {
    throw new Error(edit.message);
  }
  return edit;
};
