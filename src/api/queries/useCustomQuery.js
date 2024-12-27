import { useQueryClient } from "@tanstack/react-query";

export function useInvalidate() {
  const query = useQueryClient();

  const invalidateListQuery = async (key) => {
    await query.invalidateQueries([key]);
    await query.refetchQueries([key]);
  };

  return { invalidateListQuery };
}
