import AppShell from "../../components/template/app-shell";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button, Select, TextInput, Textarea } from "@mantine/core";
import { useState } from "react";
import { useAddUser } from "../../api/queries/useUserQuery";
import Loading from "../../components/layout/loading";
import { Alert, useHandleAlert } from "sstra-alert";
import { useInvalidate } from "../../api/queries/useCustomQuery";
import { useRoles } from "../../api/queries/useRoleQuery";

export default function AddUsers() {
  const [valueInput, setValueInput] = useState({
    name: "",
    email: "",
    notel: "",
    jekel: "laki-laki",
    alamat: "",
    roles: "",
  });
  const { status, data: alert, handleAlert } = useHandleAlert();

  const { mutate, isPending } = useAddUser();
  const { invalidateListQuery } = useInvalidate();
  const { data: roles, isLoading } = useRoles();

  const handleInputValue = (field, value) => {
    setValueInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutate(valueInput, {
      onSuccess: async (res) => {
        setValueInput({
          name: "",
          email: "",
          notel: "",
          jekel: "laki-laki",
          alamat: "",
          roles: "",
        });
        handleAlert("success", res.message);
        await invalidateListQuery("users");
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
        type={alert.type}
        message={alert.message}
        background={"bg-white"}
      />
      {isPending && <Loading />}
      <main className="w-full">
        <div className="flex items-center gap-2">
          <Link to="/users">
            <IoIosArrowBack size={23} />
          </Link>
          <h1 className="text-[1.1rem] lg:text-[1.3rem]">Tambah Users</h1>
        </div>
        <form
          className="w-full lg:w-[85%] flex flex-col gap-3 mt-8"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <TextInput
              name="name"
              value={valueInput.name}
              onChange={(e) => handleInputValue(e.target.name, e.target.value)}
              label="Nama lengkap"
              required
              withAsterisk
              placeholder=""
              size="md"
              radius={"md"}
              className="w-full"
            />
          </div>
          <div className="input-group">
            <TextInput
              name="email"
              value={valueInput.email}
              onChange={(e) => handleInputValue(e.target.name, e.target.value)}
              label="Email"
              type="email"
              required
              withAsterisk
              placeholder=""
              size="md"
              radius={"md"}
              className="w-full lg:w-[50%]"
            />
            <TextInput
              name="notel"
              value={valueInput.notel}
              onChange={(e) => handleInputValue(e.target.name, e.target.value)}
              label="No wa / telepon"
              required
              withAsterisk
              placeholder=""
              size="md"
              radius={"md"}
              className="w-full lg:w-[50%]"
            />
          </div>
          <div className="input-group">
            <Select
              name="roles"
              value={valueInput.roles}
              onChange={(value) => handleInputValue("roles", value)}
              label="Roles"
              withAsterisk
              required
              size="md"
              radius={"md"}
              className="w-full lg:w-[50%]"
              placeholder="Pilih roles"
              data={isLoading ? [] : roles.map((item) => item.name)}
              defaultValue={isLoading ? "" : roles[0].name}
              clearable
            />
            <Select
              name="jekel"
              value={valueInput.jekel}
              onChange={(value) => handleInputValue("jekel", value)}
              label="Jenis kelamin"
              withAsterisk
              required
              size="md"
              radius={"md"}
              className="w-full lg:w-[50%]"
              placeholder="Pilih jenis kelamin"
              data={["laki-laki", "perempuan"]}
              clearable
            />
          </div>
          <Textarea
            name="alamat"
            value={valueInput.alamat}
            onChange={(e) => handleInputValue(e.target.name, e.target.value)}
            label="Alamat pelanggan"
            withAsterisk
            required
            size="md"
            radius={"md"}
            placeholder="Jl. Jend. Sudirman No. 1, Jakarta Selatan"
            className="w-full lg:w-[50%] mt-2"
          />
          <div className="mt-4 w-full lg:w-[50%] ">
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
