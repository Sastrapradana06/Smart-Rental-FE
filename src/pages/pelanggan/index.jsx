import { Link, useSearchParams } from "react-router-dom";
import AppShell from "../../components/template/app-shell";
import { MdOutlineAddCircle } from "react-icons/md";
import InputSearch from "../../components/ui/input-search";
import { CiEdit } from "react-icons/ci";
import { formatDate } from "../../utils";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
const dataPelanggan = [
  {
    id: "CUST001",
    jekel: "laki-laki",
    name: "Budi Santoso",
    email: "budi.santoso@gmail.com",
    phone: "0812-3456-7890",
    address: "Jl. Merdeka No. 45, Jakarta",
    idNumber: "1234567890123456",
    joinDate: "2024-01-15",
    totalReservations: 5,
    status: "Aktif",
    notes: "Pelanggan VIP",
  },
  {
    id: "CUST002",
    jekel: "perempuan",
    name: "Rina Andini",
    email: "rina.andini@gmail.com",
    phone: "0857-1234-5678",
    address: "Jl. Sudirman No. 10, Bogor",
    idNumber: "9876543210987654",
    joinDate: "2023-11-12",
    totalReservations: 3,
    status: "Aktif",
    notes: "",
  },
  {
    id: "CUST003",
    jekel: "laki-laki",
    name: "Doni Saputra",
    email: "doni.saputra@gmail.com",
    phone: "0813-9876-5432",
    address: "Jl. Gajah Mada No. 3, Bandung",
    idNumber: "5678901234567890",
    joinDate: "2022-05-20",
    totalReservations: 10,
    status: "Nonaktif",
    notes: "Diblacklist karena pelanggaran",
  },
  {
    id: "CUST004",
    jekel: "perempuan",
    name: "Anisa Rahma",
    email: "anisa.rahma@gmail.com",
    phone: "0821-1234-9876",
    address: "Jl. Diponegoro No. 17, Surabaya",
    idNumber: "3456789012345678",
    joinDate: "2023-08-30",
    totalReservations: 7,
    status: "Aktif",
    notes: "",
  },
  {
    id: "CUST005",
    jekel: "perempuan",
    name: "Siti Aisyah",
    email: "siti.aisyah@gmail.com",
    phone: "0812-7890-1234",
    address: "Jl. Ahmad Yani No. 25, Medan",
    idNumber: "2345678901234567",
    joinDate: "2024-03-10",
    totalReservations: 2,
    status: "Aktif",
    notes: "",
  },
  {
    id: "CUST006",
    jekel: "laki-laki",
    name: "Andri Kurniawan",
    email: "andri.kurniawan@gmail.com",
    phone: "0838-5678-9012",
    address: "Jl. Imam Bonjol No. 12, Yogyakarta",
    idNumber: "6789012345678901",
    joinDate: "2023-06-25",
    totalReservations: 8,
    status: "Aktif",
    notes: "Pelanggan loyal",
  },
];

export default function Pelanggan() {
  const [data, setData] = useState([]);
  const [activePage, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const search = searchParams.get("search") || null;

  console.log({ search });

  const handlePageChange = (page) => {
    setPage(page);
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const handleSearch = () => {
    const newData = dataPelanggan.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
    setPage(1);
  };

  useEffect(() => {
    if (dataPelanggan.length > 0) {
      const newData = dataPelanggan.slice((page - 1) * 5, page * 5);
      setData(newData);
      setPage(parseInt(page));
      if (search) {
        handleSearch();
      }
    }
  }, [page, search]);

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
                ID
              </th>
              <th scope="col" className="px-12 lg:px-6  py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Tgl Daftar
              </th>
              <th scope="col" className="px-6 py-3">
                Total Reservasi
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
                  <div className="w-max flex items-center gap-1">
                    {item.jekel === "laki-laki" ? (
                      <FcBusinessman size={20} />
                    ) : (
                      <FcBusinesswoman size={20} />
                    )}
                    <p className="w-max font-semibold capitalize text-black">
                      {item.name}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <p className="p-1 rounded-md bg-green-500 w-max text-white text-[.8rem]">
                      {item.email}
                    </p>
                    <p className="p-1 rounded-md bg-red-500 w-max text-white text-[.8rem]">
                      {item.phone}
                    </p>
                    <p className="p-1 rounded-md bg-yellow-500 w-max text-white text-[.8rem]">
                      {item.address}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">{formatDate(item.joinDate)}</td>
                <td className="px-6 py-4">
                  <p className="w-max font-semibold capitalize">
                    {item.totalReservations}
                  </p>
                </td>

                <td className="px-6 py-4 ">
                  <div className="w-full h-full flex items-center justify-center gap-3 ">
                    <button title="edit">
                      <CiEdit size={23} className="text-green-500" />
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
      <main className="w-full">
        <h1 className="text-[1.1rem] lg:text-[1.3rem]">Pelanggan</h1>
        <div className="w-full mt-6 bg-white rounded-md ">
          <div className="w-full flex items-center justify-between  p-3">
            <div className="flex items-center gap-3">
              <Link to={"/pelanggan/add"}>
                <MdOutlineAddCircle size={30} className="text-green-500" />
              </Link>
            </div>
            <InputSearch />
          </div>
          <TableData />
        </div>
        <div className="w-max mt-6 m-auto border-bb">
          <Pagination
            total={Math.ceil(
              search ? data.length / 5 : dataPelanggan.length / 5
            )}
            value={activePage}
            onChange={(e) => handlePageChange(e)}
          />
        </div>
      </main>
    </AppShell>
  );
}
