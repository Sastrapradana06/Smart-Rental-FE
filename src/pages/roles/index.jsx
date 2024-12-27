import AppShell from "../../components/template/app-shell";
import { Pagination } from "@mantine/core";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InputSearch from "../../components/ui/input-search";
import { CiEdit } from "react-icons/ci";
import { MdOutlineAddCircle } from "react-icons/md";
import { useRoles } from "../../queries/useRoleQuery";

export default function Roles() {
  const [activePage, setPage] = useState(1);
  const [data, setData] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data: roles, isLoading } = useRoles();

  const handlePageChange = (page) => {
    setPage(page);
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!isLoading) {
      if (roles.length > 0) {
        const newData = roles.slice((page - 1) * 5, page * 5);
        setData(newData);
        setPage(parseInt(page));
      }
    }
  }, [page, isLoading]);

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
                Nama
              </th>
              <th scope="col" className="px-12 lg:px-6  py-3">
                Permissions
              </th>
              <th scope="col" className="px-6 py-3">
                Pengguna
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Update At
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
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
                  {index + 1}
                </th>
                <th scope="row" className="px-6 py-4 capitalize">
                  <p
                    className={`w-max font-semibold capitalize p-2 rounded-md  ${
                      item.name == "super admin"
                        ? "bg-red-200 text-red-500"
                        : "bg-blue-200 text-blue-500"
                    }`}
                  >
                    {item.name}
                  </p>
                </th>
                <td className="px-6 py-4">
                  <p className="w-max font-semibold capitalize text-[.9rem] text-gray-600 bg-gray-200 p-2 rounded-md">
                    {item.permissions.join(", ")}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="w-max font-semibold capitalize text-yellow-500">
                    {item.pengguna}
                  </p>
                </td>

                <td className="px-6 py-4">
                  <p className="w-max font-semibold">{item.created_at}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="w-max font-semibold">{item.updated_at}</p>
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
      <main className="w-full ">
        <h1 className="text-[1.1rem] lg:text-[1.3rem]">Roles Permissions</h1>
        <div className="w-full mt-6 bg-white rounded-md ">
          <div className="w-full flex items-center justify-between  p-3">
            <div className="flex items-center gap-3">
              <Link to={"/roles/add"}>
                <MdOutlineAddCircle size={30} className="text-green-500" />
              </Link>
            </div>
            <InputSearch />
          </div>
          <TableData />
        </div>
        <div className="w-max mt-6 m-auto border-bb">
          <Pagination
            total={isLoading ? 0 : Math.ceil(roles.length / 5)}
            value={activePage}
            onChange={(e) => handlePageChange(e)}
          />
        </div>
      </main>
    </AppShell>
  );
}
