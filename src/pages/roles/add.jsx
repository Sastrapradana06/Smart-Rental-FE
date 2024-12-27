import AppShell from "../../components/template/app-shell";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button, TextInput, MultiSelect } from "@mantine/core";
import { useState } from "react";
import { useAddRoles } from "../../queries/useRoleQuery";
import { Alert, useHandleAlert } from "sstra-alert";
import Loading from "../../components/layout/loading";
import { useInvalidate } from "../../queries/useCustomQuery";

export default function AddRoles() {
  const [nameRole, setNameRole] = useState("");
  const [valuePermissions, setValuePermissions] = useState([]);
  const { status, data, handleAlert } = useHandleAlert();

  const { mutate, isPending } = useAddRoles();
  const { invalidateListQuery } = useInvalidate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRole,
      permissions: valuePermissions,
      pengguna: 0,
    };

    mutate(data, {
      onSuccess: async (res) => {
        handleAlert("success", res.message);
        await invalidateListQuery("roles");
        setNameRole("");
        setValuePermissions([]);
      },
      onError: (err) => {
        console.log(err);
        handleAlert("error", err.message);
      },
    });
  };

  return (
    <AppShell>
      <Alert
        status={status}
        type={data.type}
        message={data.message}
        background={"bg-white"}
      />
      {isPending && <Loading />}
      <main className="w-full">
        <div className="flex items-center gap-2">
          <Link to="/roles">
            <IoIosArrowBack size={23} />
          </Link>
          <h1 className="text-[1.1rem] lg:text-[1.3rem]">Tambah Roles</h1>
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
          <div className="mt-4 w-full lg:w-[60%] ">
            <Button
              color="yellow"
              size="md"
              radius={"md"}
              type="submit"
              fullWidth
            >
              Simpan
            </Button>
          </div>
        </form>
      </main>
    </AppShell>
  );
}
