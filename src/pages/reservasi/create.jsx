import AppShell from "../../components/template/app-shell";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
export default function CreateReservasi() {
  return (
    <AppShell>
      <main className="w-full ">
        <div className="flex items-center gap-2">
          <Link to="/reservasi">
            <IoIosArrowBack size={23} />
          </Link>
          <h1 className="text-[1.1rem] lg:text-[1.3rem]">Buat Reservasi</h1>
        </div>
        <form className="w-full mt-8 flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center">
          <div className="w-full lg:w-[50%] flex flex-col gap-4">
            <Select
              label="Nama pelanggan"
              withAsterisk
              required
              size="md"
              radius={"md"}
              className="w-full "
              placeholder="Pilih pelanggan"
              data={["rey", "johan"]}
            />
            <Select
              label="Unit"
              withAsterisk
              required
              size="md"
              radius={"md"}
              className="w-full "
              placeholder="Pilih unit"
              data={["Pajero", "Avanza", "Brio", "Ertiga", "Xenia"]}
            />
            <DateInput
              label="Tgl dimulai"
              placeholder="Pilih tanggal"
              defaultValue={new Date()}
              withAsterisk
              required
              size="md"
              radius={"md"}
              className="w-full "
            />
            <DateInput
              label="Tgl selesai"
              placeholder="Pilih tanggal"
              withAsterisk
              required
              size="md"
              radius={"md"}
              className="w-full "
            />
            <Select
              label="Metode pembayaran"
              withAsterisk
              required
              size="md"
              radius={"md"}
              className="w-full "
              placeholder="Pilih unit"
              data={["Transfer", "Cash"]}
            />
          </div>
          <div className="w-full h-max flex flex-col gap-2 py-3 lg:py-0  lg:px-3 lg:w-[45%] border-t-2 border-t-gray-300 lg:border-t-0 lg:border-l-2 lg:border-l-gray-300">
            <div className="w-max flex-horizontal gap-3">
              <p className="font-semibold">Unit :</p>
              <p>Pajero</p>
            </div>
            <div className="w-max flex-horizontal gap-3">
              <p className="font-semibold">Nomor Plat :</p>
              <p>B 1234 AB</p>
            </div>
            <div className="w-max flex-horizontal gap-3">
              <p className="font-semibold">Harga per hari :</p>
              <p>Rp. 500.000</p>
            </div>
            <div className="w-max flex-horizontal gap-3 mt-6">
              <p className="font-semibold">Durasi rental :</p>
              <p>5 Hari</p>
            </div>
            <div className="w-max flex-horizontal gap-3">
              <p className="font-semibold">Total harga :</p>
              <p>
                Rp. <span className="font-bold text-green-500"> 2.500.000</span>
              </p>
            </div>
            <div className="w-max flex-horizontal gap-3">
              <p className="font-semibold">Metode pembayaran :</p>
              <p>
                <span className="font-bold text-blue-500">Cash</span>
              </p>
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
          </div>
        </form>
      </main>
    </AppShell>
  );
}
