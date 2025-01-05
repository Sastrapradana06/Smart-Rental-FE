import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addUserServices,
  deleteUserServices,
  editUserServices,
  getUserIdServices,
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

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id) => deleteUserServices(id),
  });
};

export const useUserId = (id) => {
  return useQuery({
    queryKey: ["userId", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return getUserIdServices(id);
    },
    enabled: !!id,
    placeholderData: null,
  });
};

export const useEditUser = () => {
  return useMutation({
    mutationFn: (data) => editUserServices(data),
  });
};
