import { Link, useSearchParams } from "react-router-dom";
import AppShell from "../../components/template/app-shell";
import { MdOutlineAddCircle } from "react-icons/md";
import InputSearch from "../../components/ui/input-search";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { Button, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDeleteUser, useUsers } from "../../api/queries/useUserQuery";
import { Alert, useHandleAlert } from "sstra-alert";
import Loading from "../../components/layout/loading";
import { BtnEdit } from "../../components/ui/btn-edit";
import { FaRegTrashCan } from "react-icons/fa6";
import { useInvalidate } from "../../api/queries/useCustomQuery";

const dataPelanggan = [
  {
    id: "CUST001",
    name: "Budi Santoso",
    jekel: "laki-laki",
    email: "budi.santoso@gmail.com",
    phone: "0812-3456-7890",
    address: "Jl. Merdeka No. 45, Jakarta",
    joinDate: "2024-01-15",
    roles: "super admin",
  },
  {
    id: "CUST002",
    name: "Sarah wijayanto",
    jekel: "perempuan",
    email: "sarah@gmail.com",
    phone: "0846-1256-1323",
    address: "Jl. Sudirman No. 10, Bogor",
    joinDate: "2023-11-12",
    roles: "staff",
  },
];

export default function User() {
  const [data, setData] = useState([]);
  const [activePage, setPage] = useState(1);
  const [idRecords, setIdRecords] = useState([]);

  const { status, data: alert, handleAlert } = useHandleAlert();
  const user = JSON.parse(localStorage.getItem("user"));

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  let search = searchParams.get("search") || null;

  const { data: users, isLoading } = useUsers();
  const deleteUser = useDeleteUser();
  const { invalidateListQuery } = useInvalidate();

  const handleRecords = (id) => {
    const isSelectedId = idRecords.includes(id);
    if (isSelectedId) {
      setIdRecords(idRecords.filter((item) => item !== id));
    } else {
      setIdRecords([...idRecords, id]);
    }
  };

  const handleCheckAll = () => {
    if (idRecords.length === users.length - 1) {
      setIdRecords([]);
    } else {
      const callID = users.map((item) => {
        return item.id;
      });

      const filterId = callID.filter((id) => {
        return id !== user.id;
      });

      setIdRecords(filterId);
    }
  };

  const handleDelete = () => {
    const data = {
      ids: idRecords,
    };

    deleteUser.mutate(data, {
      onSuccess: async (res) => {
        handleAlert("success", res.message);
        setIdRecords([]);
        searchParams.delete("search");
        setSearchParams(searchParams);
        search = null;
        await invalidateListQuery("users");
        await invalidateListQuery("roles");
      },
      onError: (error) => {
        handleAlert("error", error.message);
      },
    });
  };

  const handlePageChange = (page) => {
    setPage(page);
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const handleSearch = () => {
    const newData = users.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (newData.length === 0) {
      handleAlert("info", "Data not found");
    } else {
      setData(newData);
      setPage(1);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      if (users.length > 0) {
        const newData = users.slice((page - 1) * 5, page * 5);
        setData(newData);
        setPage(parseInt(page));
      }
      if (search) {
        handleSearch();
      }
    }
  }, [page, isLoading, users, search]);

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
                    checked={
                      users ? idRecords.length === data.length - 1 : false
                    }
                    onChange={handleCheckAll}
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
                Tgl Masuk
              </th>
              <th scope="col" className="px-6 py-3">
                Roles
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
                      disabled={user.id === item.id}
                      checked={idRecords.includes(item.id)}
                      onChange={() => handleRecords(item.id)}
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
                      {item.notel}
                    </p>
                    <p className="p-1 rounded-md bg-yellow-500 w-max text-white text-[.8rem]">
                      {item.alamat}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="w-max font-semibold">{item.created_at}</p>
                </td>
                <td className="px-6 py-4">
                  <Button
                    variant="light"
                    color={
                      item.roles === "super admin"
                        ? "red"
                        : item.roles === "admin"
                        ? "yellow"
                        : "blue"
                    }
                    size="sm"
                    radius={"md"}
                  >
                    {item.roles}
                  </Button>
                </td>

                <td className="px-6 py-4 ">
                  <div className="w-full h-full flex items-center justify-center gap-3 ">
                    <BtnEdit link={"/users/add"} />
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
      <Alert
        status={status}
        type={alert.type}
        message={alert.message}
        background={"bg-white"}
      />
      {isLoading && <Loading />}
      <main className="w-full">
        <h1 className="text-[1.1rem] lg:text-[1.3rem]">Data Users</h1>
        <div className="w-full mt-6 bg-white rounded-md ">
          <div className="w-full flex items-center justify-between  p-3">
            <div className="flex items-center gap-3">
              <Link to={"/users/add"}>
                <MdOutlineAddCircle size={30} className="text-green-500" />
              </Link>
              {idRecords.length > 0 && (
                <button
                  className="p-2 rounded-md  hover:bg-red-300 duration-150 bg-red-50"
                  disabled={idRecords.length == 0 || idRecords == null}
                  onClick={handleDelete}
                >
                  <FaRegTrashCan size={18} className="text-red-500" />
                </button>
              )}
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
