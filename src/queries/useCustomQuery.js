import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../services/user.services";

export function useInvalidate() {
  const query = useQueryClient();

  const invalidateListQuery = async (key) => {
    await query.invalidateQueries([key]);
    await query.refetchQueries([key]);
  };

  return { invalidateListQuery };
}

export const useUserLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }) => loginUser(email, password),
  });
};
