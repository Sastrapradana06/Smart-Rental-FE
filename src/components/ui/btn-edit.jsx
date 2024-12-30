/* eslint-disable react/prop-types */
import { Button } from "@mantine/core";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const BtnEdit = ({ link }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(link)}
      variant="subtle"
      color="green"
      radius={"lg"}
      size="xs"
      title="edit"
    >
      <CiEdit size={25} className="text-yellow-500" />
    </Button>
  );
};
