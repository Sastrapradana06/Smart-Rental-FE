import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addRolesServices,
  deleteRoleServices,
  getRolesServices,
} from "../services/role.services";

export const useAddRoles = () => {
  return useMutation({
    mutationFn: (data) => addRolesServices(data),
  });
};

export const useRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: () => getRolesServices(),
    staleTime: 5 * 60 * 1000,
  });
};

export const useDeleteRole = () => {
  return useMutation({
    mutationFn: (id) => deleteRoleServices(id),
  });
};
