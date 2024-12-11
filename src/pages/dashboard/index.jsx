import AppShell from "../../components/template/app-shell";
import { FaCarSide } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";

export default function Dashboard() {
  return (
    <AppShell>
      <section className="w-full ">
        <h1 className="text-[1.1rem] lg:text-[1.3rem]">Dashboard</h1>
        <div className="w-full  mt-4 flex items-center flex-wrap  gap-3  ">
          <div className="w-[48%] h-[100px] border border-zinc-200  rounded-md shadow-md p-3 lg:w-[300px]">
            <p className="font-semibold text-gray-400 text-[.8rem]">
              Total Unit
            </p>
            <h1 className="text-[1.1rem]">10</h1>
            <div className="flex-horizontal gap-2 w-max text-amber-500">
              <p className="font-semibold  text-[.8rem] hidden lg:block ">
                Total semua mobil{" "}
              </p>
              <FaCarSide className="text-[1.2rem] lg:text-[1rem]" />
            </div>
          </div>
          <div className="w-[48%]  h-[100px] border border-zinc-200  rounded-md shadow-md p-3 lg:w-[300px]">
            <p className="font-semibold text-gray-400 text-[.8rem]">
              Unit Tersedia
            </p>
            <h1 className="text-[1.1rem]">6</h1>
            <div className="flex-horizontal gap-2 w-max text-green-500">
              <p className="font-semibold  text-[.8rem] hidden lg:block ">
                Total mobil tersedia{" "}
              </p>
              <IoMdCheckbox className="text-[1.2rem] lg:text-[1rem]" />
            </div>
          </div>
          <div className="w-[48%]  h-[100px] border border-zinc-200  rounded-md shadow-md p-3 lg:w-[300px]">
            <p className="font-semibold text-gray-400 text-[.8rem]">
              Reservasi Aktif
            </p>
            <h1 className="text-[1.1rem]">4</h1>
            <div className="flex-horizontal gap-2 w-max text-sky-500">
              <p className="font-semibold  text-[.8rem] hidden lg:block ">
                Total pemesanan aktif
              </p>
              <FaCalendarCheck className="text-[1.2rem] lg:text-[1rem]" />
            </div>
          </div>
          <div className="w-[48%]  h-[100px] border border-zinc-200  rounded-md shadow-md p-3 lg:w-[300px]">
            <p className="font-semibold text-gray-400 text-[.8rem]">Profit</p>
            <h1 className="text-[1.1rem]">Rp. 500.000</h1>
            <div className="flex-horizontal gap-2 w-max text-lime-500">
              <p className="font-semibold  text-[.8rem] hidden lg:block ">
                Total semua pendapatan
              </p>
              <MdOutlineShowChart className="text-[1.2rem] lg:text-[1rem]" />
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
