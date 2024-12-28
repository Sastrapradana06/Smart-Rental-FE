import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addUserServices,
  getUserServices,
  loginUserServices,
} from "../services/user.services";

export const useUserLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }) => loginUserServices(email, password),
  });
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUserServices(),
    staleTime: 5 * 60 * 1000,
  });
};

export const useAddUser = () => {
  return useMutation({
    mutationFn: (data) => addUserServices(data),
  });
};
