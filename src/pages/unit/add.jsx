import { Button, Select, TextInput } from "@mantine/core";
import AppShell from "../../components/template/app-shell";
import "./unit.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
export default function AddUnit() {
  return (
    <AppShell>
      <main className="w-full ">
        <div className="flex items-center gap-2">
          <Link to="/unit">
            <IoIosArrowBack size={23} />
          </Link>
          <h1 className="text-[1.1rem] lg:text-[1.3rem]">Tambah Unit</h1>
        </div>
        <section className="container-form-unit">
          <div className="w-[80%] lg:w-[25%] h-max ">
            <img
              src="/pajero.png"
              className="w-full h-[250px] border-2 p-1 border-dashed border-gray-500 rounded-md object-cover"
              alt=""
            />
            <Button color="cyan" className="mt-4">
              Pilih Gambar
            </Button>
          </div>
          <form className="w-full lg:w-[65%] flex flex-col gap-3">
            <TextInput
              label="Nama unit"
              required
              withAsterisk
              placeholder="Toyota Avanza"
              size="md"
              radius={"md"}
              className="w-full"
            />
            <div className="input-group">
              <TextInput
                label="Nomor Plat"
                required
                withAsterisk
                placeholder="B 1234 AB"
                size="md"
                radius={"md"}
                className="w-full lg:w-[50%]"
              />
              <TextInput
                label="Tahun unit"
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
                label="Jenis unit"
                withAsterisk
                required
                size="md"
                radius={"md"}
                className="w-full lg:w-[50%]"
                placeholder="Pilih Jenis"
                data={["Sedan", "MPV"]}
              />
              <Select
                label="Transmisi"
                withAsterisk
                required
                size="md"
                radius={"md"}
                className="w-full lg:w-[50%]"
                placeholder="Pilih Jenis"
                data={["Manual", "Automatic"]}
              />
            </div>
            <div className="input-group">
              <Select
                label="Doors"
                withAsterisk
                required
                size="md"
                radius={"md"}
                className="w-full lg:w-[50%]"
                placeholder="Jumlah Doors"
                data={["4", "6"]}
              />
              <Select
                label="Seats"
                withAsterisk
                required
                size="md"
                radius={"md"}
                className="w-full lg:w-[50%]"
                placeholder="Jumlah Seats"
                data={["4", "5", "8"]}
              />
            </div>
            <div className="input-group">
              <TextInput
                label="Harga sewa"
                leftSection="Rp."
                required
                withAsterisk
                placeholder=""
                size="md"
                radius={"md"}
                className="w-full lg:w-[50%]"
              />
              <TextInput
                label="Quantity"
                required
                withAsterisk
                placeholder="12"
                size="md"
                radius={"md"}
                className="w-full lg:w-[50%]"
              />
            </div>
            <Button
              color="yellow"
              className="mt-4"
              size="md"
              radius={"md"}
              type="submit"
            >
              Simpan
            </Button>
          </form>
        </section>
      </main>
    </AppShell>
  );
}
