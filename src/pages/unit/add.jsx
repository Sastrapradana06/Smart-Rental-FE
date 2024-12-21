import { Button, Select, TextInput } from "@mantine/core";
import AppShell from "../../components/template/app-shell";
import { Alert, useHandleAlert } from "sstra-alert";

import "./unit.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useRef, useState } from "react";
export default function AddUnit() {
  const [valueFile, setValueFile] = useState();
  const [inputValue, setInputValue] = useState({
    unit: "",
    no_plat: "",
    tahun: "",
    jenis: "",
    transmisi: "",
    doors: "",
    seats: "",
    harga_sewa: "",
    quantity: "",
  });
  const fileInputRef = useRef(null);
  const { status, data, handleAlert } = useHandleAlert();

  const handleInputValue = (name, value) => {
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setValueFile({
        url,
        file,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { file: valueFile.file, ...inputValue };
    handleAlert("success", "Unit berhasil ditambahkan");
    console.log({ data });
  };

  return (
    <AppShell>
      <Alert
        status={status}
        type={data.type}
        message={data.message}
        background={"bg-gray-700"}
      />
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
              src={valueFile?.url || "/pajero.png"}
              className="w-full h-[250px] border-2 p-1 border-dashed border-gray-500 rounded-md object-cover"
              alt=""
            />
            <Button
              color="cyan"
              className="mt-4"
              onClick={() => fileInputRef.current.click()}
            >
              Pilih Gambar
            </Button>
          </div>
          <form
            className="w-full lg:w-[65%] flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <TextInput
              name="unit"
              value={inputValue.unit}
              onChange={(e) => handleInputValue(e.target.name, e.target.value)}
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
                name="no_plat"
                value={inputValue.no_plat}
                onChange={(e) =>
                  handleInputValue(e.target.name, e.target.value)
                }
                required
                withAsterisk
                placeholder="B 1234 AB"
                size="md"
                radius={"md"}
                className="w-full lg:w-[50%]"
              />
              <TextInput
                label="Tahun unit"
                name="tahun"
                value={inputValue.tahun}
                onChange={(e) =>
                  handleInputValue(e.target.name, e.target.value)
                }
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
                name="jenis"
                value={inputValue.jenis}
                onChange={(value) => handleInputValue("jenis", value)}
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
                name="transmisi"
                value={inputValue.transmisi}
                onChange={(value) => handleInputValue("transmisi", value)}
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
                name="doors"
                value={inputValue.doors}
                onChange={(value) => handleInputValue("doors", value)}
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
                name="seats"
                value={inputValue.seats}
                onChange={(value) => handleInputValue("seats", value)}
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
                name="harga_sewa"
                value={inputValue.harga_sewa}
                onChange={(e) =>
                  handleInputValue(e.target.name, e.target.value)
                }
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
                name="quantity"
                value={inputValue.quantity}
                onChange={(e) =>
                  handleInputValue(e.target.name, e.target.value)
                }
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
