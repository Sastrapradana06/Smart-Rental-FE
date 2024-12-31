import AppShell from "../../components/template/app-shell";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button, TextInput, MultiSelect, Select } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  useAddRoles,
  useEditRole,
  useRoleId,
} from "../../api/queries/useRoleQuery";
import { Alert, useHandleAlert } from "sstra-alert";
import Loading from "../../components/layout/loading";
import { useInvalidate } from "../../api/queries/useCustomQuery";

export default function AddRoles() {
  const [nameRole, setNameRole] = useState("");
  const [valuePermissions, setValuePermissions] = useState([]);
  const [color, setColor] = useState("");
  const { status, data, handleAlert } = useHandleAlert();

  const { id } = useParams();

  const { mutate, isPending } = useAddRoles();
  const editRole = useEditRole();
  const { invalidateListQuery } = useInvalidate();
  const { data: role, isPending: isPendingRole } = useRoleId(id ? id : "");

  useEffect(() => {
    if (role) {
      setNameRole(role.name);
      setValuePermissions(role.permissions);
      setColor(role.color);
    }
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!valuePermissions || valuePermissions.length === 0) {
      handleAlert("error", "Permissions is required");
      return;
    }

    if (!color) {
      handleAlert("error", "Color is required");
      return;
    }

    const data = {
      name: nameRole,
      permissions: valuePermissions,
      pengguna: 0,
      color,
    };

    if (!id) {
      mutate(data, {
        onSuccess: async (res) => {
          handleAlert("success", res.message);
          await invalidateListQuery("roles");
          setNameRole("");
          setValuePermissions([]);
          setColor("");
        },
        onError: (err) => {
          console.log(err);
          handleAlert("error", err.message);
        },
      });
    } else {
      data.pengguna = role.pengguna;
      const dataEdit = {
        id,
        data,
      };

      editRole.mutate(dataEdit, {
        onSuccess: async (res) => {
          handleAlert("success", res.message);
          await invalidateListQuery("roles");
          setNameRole("");
          setValuePermissions([]);
          setColor("");
        },
        onError: (err) => {
          console.log(err);
          handleAlert("error", err.message);
        },
      });
    }
  };

  return (
    <AppShell>
      <Alert
        status={status}
        type={data.type}
        message={data.message}
        background={"bg-white"}
      />
      {isPendingRole || isPending || (editRole.isPending && <Loading />)}
      <main className="w-full">
        <div className="flex items-center gap-2">
          <Link to="/roles">
            <IoIosArrowBack size={23} />
          </Link>
          <h1 className="text-[1.1rem] lg:text-[1.3rem]">
            {id ? "Edit" : "Tambah"} Roles
          </h1>
        </div>
        <form
          className="w-full lg:w-[85%] flex flex-col gap-3 mt-8"
          onSubmit={handleSubmit}
        >
          <TextInput
            name="name"
            value={nameRole}
            onChange={(e) => setNameRole(e.target.value)}
            label="Nama roles"
            required
            withAsterisk
            placeholder="Admin"
            size="md"
            radius={"md"}
            className="w-full lg:w-[60%]"
          />
          <MultiSelect
            value={valuePermissions}
            onChange={setValuePermissions}
            label="Permissions"
            placeholder="Pilih permissions"
            data={[
              "Unit",
              "Reservasi",
              "Pelanggan",
              "Transaksi",
              "Users",
              "Roles",
            ]}
            defaultValue={["Unit"]}
            clearable
            required
            hidePickedOptions
            size="md"
            radius={"md"}
            checkIconPosition="right"
            className="w-full lg:w-[60%]"
          />
          <Select
            value={color}
            onChange={(value) => setColor(value)}
            label="Color"
            placeholder="Pilih color"
            data={[
              "dark",
              "gray",
              "blue",
              "red",
              "pink",
              "orange",
              "green",
              "yellow",
            ]}
            defaultValue={["Unit"]}
            clearable
            required
            hidePickedOptions
            size="md"
            radius={"md"}
            checkIconPosition="right"
            searchable
            className="w-full lg:w-[60%]"
          />
          <div className="mt-4 w-full lg:w-[60%] ">
            <Button
              color="yellow"
              size="md"
              radius={"md"}
              type="submit"
              fullWidth
            >
              {id ? "Edit" : "Tambah"}
            </Button>
          </div>
        </form>
      </main>
    </AppShell>
  );
}
