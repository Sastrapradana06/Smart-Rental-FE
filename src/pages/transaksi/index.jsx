import AppShell from "../../components/template/app-shell";
import { Pagination } from "@mantine/core";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InputSearch from "../../components/ui/input-search";
const reservationsData = [
  {
    id: 1,
    id_reservasi: "RSV001",
    customerName: "Budi Santoso",
    carName: "Toyota Avanza",
    licensePlate: "B 1234 XYZ",
    metode_pembayaran: "cash",
    totalPrice: 1500000,
  },
  {
    id: 2,
    id_reservasi: "RSV002",
    customerName: "Doni Saputra",
    carName: "Suzuki Ertiga",
    licensePlate: "B 9101 DEF",
    metode_pembayaran: "transfer bank",
    totalPrice: 1800000,
  },
];

export default function Transaksi() {
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
              <th scope="col" className="px-6 py-3">
                ID reservasi
              </th>
              <th scope="col" className="px-12 lg:px-6  py-3">
                Nama Pelanggan
              </th>
              <th scope="col" className="px-6 py-3">
                Unit
              </th>
              <th scope="col" className="px-6 py-3">
                Metode Pembayaran
              </th>
              <th scope="col" className="px-6 py-3">
                Total
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
                <th scope="row" className="px-6 py-4 capitalize">
                  {item.id_reservasi}
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
                  <p
                    className={`w-max font-semibold p-2 rounded-md  text-white capitalize ${
                      item.metode_pembayaran == "cash"
                        ? "bg-sky-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.metode_pembayaran}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="w-max font-semibold">
                    Rp.{" "}
                    <span className="text-green-500 font-semibold">
                      {item.totalPrice.toLocaleString("id-ID")}
                    </span>
                  </p>
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
        <h1 className="text-[1.1rem] lg:text-[1.3rem]">Transaksi</h1>
        <div className="w-full mt-6 bg-white rounded-md ">
          <div className="w-full flex items-center justify-between  p-3">
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
