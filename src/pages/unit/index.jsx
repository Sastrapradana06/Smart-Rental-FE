import AppShell from "../../components/template/app-shell";
import { TextInput } from "@mantine/core";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";

const dataDummy = [
  {
    unit: "Toyota Avanza",
    no_plat: "B 1234 AB",
    quantity: 10,
    tersedia: 5,
    disewa: 5,
    harga: 400000,
  },
  {
    unit: "Kijang Innova",
    no_plat: "B 1234 AB",
    quantity: 7,
    tersedia: 2,
    disewa: 5,
    harga: 500000,
  },
];
export default function Unit() {
  const TableData = () => {
    return (
      <div className="relative overflow-x-auto mt-2">
        <table className="w-full text-sm text-left border rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs bg-zinc-100 text-black">
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
                Unit
              </th>
              <th scope="col" className="px-6 py-3">
                No Plat
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Tersedia
              </th>
              <th scope="col" className="px-6 py-3">
                Disewa
              </th>
              <th scope="col" className="px-6 py-3">
                Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataDummy.map((item, index) => (
              <tr
                className="bg-white border-b bg-transparent text-zinc-700 "
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
                <th scope="row" className="px-6 py-4 ">
                  {item.unit}
                </th>
                <td className="px-6 py-4">{item.no_plat}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">{item.tersedia}</td>
                <td className="px-6 py-4">{item.disewa}</td>
                <td className="px-6 py-4">
                  RP. {item.harga.toLocaleString("id-ID")}
                </td>
                <td className="flex items-center px-6 py-4 gap-3">
                  <button>
                    <CiEdit size={20} className="text-green-500" />
                  </button>
                  <button>
                    <MdOutlineDeleteOutline
                      size={20}
                      className="text-red-500"
                    />
                  </button>
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
      <section className="w-full ">
        <h1 className="text-[1.1rem] lg:text-[1.3rem]">Unit Mobil</h1>
        <div className="w-full mt-6 bg-white rounded-md ">
          <div className="w-full flex items-center justify-between  p-3">
            <div className="flex items-center gap-3">
              <button>
                <MdOutlineAddCircle size={30} className="text-green-500" />
              </button>
            </div>
            <div className="w-[30%]">
              <TextInput
                radius={"md"}
                leftSectionPointerEvents="none"
                leftSection={<IoSearchOutline size={14} color="black" />}
                placeholder="Search"
              />
            </div>
          </div>
          <TableData />
        </div>
      </section>
    </AppShell>
  );
}
