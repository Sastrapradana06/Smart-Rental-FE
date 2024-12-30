import AppShell from "../../components/template/app-shell";
import { Button, Pagination } from "@mantine/core";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import { formatDate } from "../../utils";
import { useEffect, useState } from "react";
import InputSearch from "../../components/ui/input-search";
import { BtnEdit } from "../../components/ui/btn-edit";

import { IoCheckboxSharp } from "react-icons/io5";
const reservationsData = [
  {
    id: 1,
    customerName: "Budi Santoso",
    carName: "Toyota Avanza",
    licensePlate: "B 1234 XYZ",
    startDate: "2024-12-01",
    endDate: "2024-12-03",
    status: "aktif",
    totalPrice: 1500000,
  },
  {
    id: 2,
    customerName: "Rina Andini",
    carName: "Honda Brio",
    licensePlate: "D 5678 ABC",
    startDate: "2024-12-02",
    endDate: "2024-12-05",
    status: "selesai",
    totalPrice: 2000000,
  },
  {
    id: 3,
    customerName: "Doni Saputra",
    carName: "Suzuki Ertiga",
    licensePlate: "B 9101 DEF",
    startDate: "2024-12-05",
    endDate: "2024-12-07",
    status: "aktif",
    totalPrice: 1800000,
  },
  {
    id: 4,
    customerName: "Siti Aisyah",
    carName: "Mitsubishi Pajero",
    licensePlate: "B 1314 JKL",
    startDate: "2024-12-07",
    endDate: "2024-12-09",
    status: "aktif",
    totalPrice: 2500000,
  },
  {
    id: 5,
    customerName: "Eko Nugroho",
    carName: "Toyota Fortuner",
    licensePlate: "L 5678 MNO",
    startDate: "2024-12-03",
    endDate: "2024-12-05",
    status: "selesai",
    totalPrice: 3000000,
  },
  {
    id: 6,
    customerName: "Linda Wijaya",
    carName: "Nissan Livina",
    licensePlate: "H 7890 PQR",
    startDate: "2024-12-10",
    endDate: "2024-12-12",
    status: "aktif",
    totalPrice: 1700000,
  },

  {
    id: 7,
    customerName: "Tina Marlina",
    carName: "Kia Seltos",
    licensePlate: "E 3456 VWX",
    startDate: "2024-12-09",
    endDate: "2024-12-11",
    status: "aktif",
    totalPrice: 2200000,
  },
  {
    id: 8,
    customerName: "Andri Kurniawan",
    carName: "Hyundai Creta",
    licensePlate: "A 6789 YZA",
    startDate: "2024-12-11",
    endDate: "2024-12-13",
    status: "aktif",
    totalPrice: 2400000,
  },
];

export default function Reservasi() {
  const [activePage, setPage] = useState(1);
  const [data, setData] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const handlePageChange = (page) => {
    setPage(page);
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (reservationsData.length > 0) {
      const newData = reservationsData.slice((page - 1) * 5, page * 5);
      setData(newData);
      setPage(parseInt(page));
    }
  }, [page]);

  const TableData = () => {
    return (
      <div className="relative overflow-x-auto mt-2">
        <table className="w-full text-sm text-left border rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-[.9rem] bg-zinc-100 text-black">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-12 lg:px-6  py-3">
                Nama Pelanggan
              </th>
              <th scope="col" className="px-6 py-3">
                Unit
              </th>
              <th scope="col" className="px-6 py-3">
                Durasi
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                className="bg-white border-b bg-transparent text-zinc-600 hover:bg-zinc-100 duration-150 cursor-pointer text-[.9rem]"
                key={index}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="px-6 py-4 capitalize">
                  {item.id}
                </th>
                <td className="px-6 py-4">
                  <p className="w-max font-semibold capitalize text-black">
                    {item.customerName}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <p className="w-max font-semibold ">{item.carName}</p>
                    <p className="p-1 rounded-md bg-yellow-500 w-max text-white text-[.8rem]">
                      {item.licensePlate}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <p className="w-max">
                    {formatDate(item.startDate)} - {formatDate(item.endDate)}
                  </p>
                </td>

                <td className="px-6 py-4">
                  <Button
                    variant="light"
                    color={item.status === "aktif" ? "blue" : "green"}
                    size="sm"
                    radius={"md"}
                  >
                    {item.status}
                  </Button>
                </td>

                <td className="px-6 py-4 ">
                  <div className="w-full h-full flex items-center justify-center gap-3 ">
                    <BtnEdit link={"/reservasi/create"} />
                    <button
                      title="selesai"
                      disabled={item.status === "selesai"}
                    >
                      <IoCheckboxSharp
                        size={25}
                        className={`${
                          item.status === "selesai"
                            ? "text-gray-400"
                            : "text-green-500"
                        }`}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <AppShell>
      <main className="w-full ">
        <h1 className="text-[1.1rem] lg:text-[1.3rem]">Reservasi</h1>
        <div className="w-full mt-6 bg-white rounded-md ">
          <div className="w-full flex items-center justify-between  p-3">
            <div className="flex items-center gap-3">
              <Link to={"/reservasi/create"}>
                <MdOutlineAddCircle size={30} className="text-green-500" />
              </Link>
            </div>
            <InputSearch />
          </div>
          <TableData />
        </div>
        <div className="w-max mt-6 m-auto border-bb">
          <Pagination
            total={Math.ceil(reservationsData.length / 5)}
            value={activePage}
            onChange={(e) => handlePageChange(e)}
          />
        </div>
      </main>
    </AppShell>
  );
}
