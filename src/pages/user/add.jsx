import AppShell from "../../components/template/app-shell";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button, Select, TextInput, Textarea } from "@mantine/core";
export default function AddUsers() {
  return (
    <AppShell>
      <main className="w-full">
        <div className="flex items-center gap-2">
          <Link to="/users">
            <IoIosArrowBack size={23} />
          </Link>
          <h1 className="text-[1.1rem] lg:text-[1.3rem]">Tambah Users</h1>
        </div>
        <form className="w-full lg:w-[85%] flex flex-col gap-3 mt-8">
          <div className="input-group">
            <TextInput
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
              label="Roles"
              withAsterisk
              required
              size="md"
              radius={"md"}
              className="w-full lg:w-[50%]"
              placeholder="Pilih roles"
              data={["Super admin", "Staff"]}
            />
            <Select
              label="Jenis kelamin"
              withAsterisk
              required
              size="md"
              radius={"md"}
              className="w-full lg:w-[50%]"
              placeholder="Pilih jenis kelamin"
              data={["Laki-laki", "Perempuan"]}
            />
          </div>
          <Textarea
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
