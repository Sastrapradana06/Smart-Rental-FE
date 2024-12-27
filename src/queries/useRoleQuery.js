import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addRolesServices,
  deleteRole,
  getRoles,
} from "../services/role.services";

export const useAddRoles = () => {
  return useMutation({
    mutationFn: (data) => addRolesServices(data),
  });
};

export const useRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: () => getRoles(),
    staleTime: 5 * 60 * 1000,
  });
};

export const useDeleteRole = () => {
  return useMutation({
    mutationFn: (id) => deleteRole(id),
  });
};
