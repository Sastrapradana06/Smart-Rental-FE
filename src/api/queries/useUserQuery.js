import { useMutation } from "@tanstack/react-query";
import { loginUserServices } from "../services/user.services";

export const useUserLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }) => loginUserServices(email, password),
  });
};
