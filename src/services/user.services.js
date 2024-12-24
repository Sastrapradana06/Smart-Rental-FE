import { POST } from "../api";

export const loginUser = async (email, password) => {
  const api = await POST("/auth/login", { email, password });
  console.log({ api });

  if (api.error) {
    throw new Error(api.error);
  }
  return api;
};
