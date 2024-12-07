import { Avatar } from "@mantine/core";
import { AiOutlineHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { LiaCarSolid } from "react-icons/lia";
import { IoFileTrayOutline } from "react-icons/io5";
import { BiSolidUserDetail } from "react-icons/bi";
export default function Dashboard() {
  const { pathname } = useLocation();

  return (
    <main>
      <nav className="w-full fixed z-20 top-0 left-0 bg-white  px-6 py-4  border-b border-gray-200">
        <div className="w-full flex justify-between items-center  ">
          <h1>
            Selamat Datang,{" "}
            <span className="text-orange-500 font-semibold">Admin</span>
          </h1>
          <Avatar color="cyan" radius="xl">
            MK
          </Avatar>
        </div>
      </nav>
      <section className="w-full bg-zinc-100 h-[100vh] px-6 pt-[90px] ">
        <div className="w-[25%] h-max fixed top-[100px] left-0 px-6 ">
          <div className="w-full flex-vertical gap-1 ">
            <div
              className={`w-full flex items-center gap-2  p-2 rounded-md cursor-pointer ${
                pathname === "/dashboard" ? "bg-zinc-200 text-violet-500" : ""
              }`}
            >
              <AiOutlineHome size={20} className="" />
              <p className="font-semibold text-[.9rem]">Dashboard</p>
            </div>
            <div
              className={`w-full flex items-center gap-2  p-2 rounded-md cursor-pointer ${
                pathname === "/cars" ? "bg-zinc-200 text-violet-500" : ""
              }`}
            >
              <LiaCarSolid size={20} className="" />
              <p className="font-semibold text-[.9rem]">Cars</p>
            </div>
            <div
              className={`w-full flex items-center gap-2  p-2 rounded-md cursor-pointer ${
                pathname === "/reservations"
                  ? "bg-zinc-200 text-violet-500"
                  : ""
              }`}
            >
              <IoFileTrayOutline size={20} className="" />
              <p className="font-semibold text-[.9rem]">Reservations</p>
            </div>
            <div
              className={`w-full flex items-center gap-2  p-2 rounded-md cursor-pointer ${
                pathname === "/customers" ? "bg-zinc-200 text-violet-500" : ""
              }`}
            >
              <BiSolidUserDetail size={20} className="" />
              <p className="font-semibold text-[.9rem]">Customers</p>
            </div>
          </div>
        </div>
        <div className="w-full  h-[400px] pl-[30%]">
          <h1>dashboard</h1>
        </div>
      </section>
    </main>
  );
}
