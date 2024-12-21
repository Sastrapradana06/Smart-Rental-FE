import AppShell from "../../components/template/app-shell";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button, TextInput, MultiSelect } from "@mantine/core";
import { useState } from "react";
export default function AddRoles() {
  const [valuePermissions, setValuePermissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valuePermissions);
  };

  return (
    <AppShell>
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
