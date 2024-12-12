import AppShell from "../../components/template/app-shell";
import { FaCarSide } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";
import { BarChart, AreaChart } from "@mantine/charts";
export default function Dashboard() {
  const dataProfit = [
    { month: "January", PROFIT: 5000000 },
    { month: "February", PROFIT: 3000000 },
    { month: "March", PROFIT: 5500000 },
    { month: "April", PROFIT: 1500000 },
    { month: "May", PROFIT: 7000000 },
    { month: "June", PROFIT: 6000000 },
    { month: "July", PROFIT: 7500000 },
    { month: "August", PROFIT: 8000000 },
    { month: "September", PROFIT: 6500000 },
    { month: "October", PROFIT: 7000000 },
    { month: "November", PROFIT: 7500000 },
    { month: "December", PROFIT: 9000000 },
  ];

  const dataUnit = [
    { name: "Toyota Avanza", RENTALS: 35 },
    { name: "Honda Brio", RENTALS: 25 },
    { name: "Suzuki Ertiga", RENTALS: 20 },
    { name: "Daihatsu Xenia", RENTALS: 15 },
    { name: "Mitsubishi Pajero", RENTALS: 10 },
  ];

  return (
    <AppShell>
      <section className="w-full ">
        <h1 className="text-[1.1rem] lg:text-[1.3rem]">Dashboard</h1>
        <div className="w-full  mt-4 flex items-center flex-wrap  gap-3  ">
          <div className="w-[48%] h-[100px] border border-zinc-200 bg-white  rounded-md shadow-md p-3 lg:w-[300px]">
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
          <div className="w-[48%]  h-[100px] border border-zinc-200 bg-white   rounded-md shadow-md p-3 lg:w-[300px]">
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
          <div className="w-[48%]  h-[100px] border border-zinc-200 bg-white  rounded-md shadow-md p-3 lg:w-[300px]">
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
          <div className="w-[48%]  h-[100px] border border-zinc-200 bg-white  rounded-md shadow-md p-3 lg:w-[300px]">
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
        <div className="w-full mt-8 flex flex-wrap gap-4 items-center">
          <div className="w-full lg:w-[48%] rounded-md border border-zinc-200 shadow-md bg-white ">
            <div className="w-full border-b-2 border-gray-200 p-3 ">
              <h1 className="">Laporan Keuntungan bulanan</h1>
            </div>
            <div className="w-full p-3 mt-4">
              <AreaChart
                h={200}
                data={dataProfit}
                dataKey="month"
                series={[
                  { name: "PROFIT", color: "lime.6", valueKey: "PROFIT" },
                ]}
                tickLine="y"
              />
            </div>
          </div>
          <div className="w-full lg:w-[48%] rounded-md border border-zinc-200 shadow-md bg-white ">
            <div className="w-full border-b-2 border-gray-200 p-3 ">
              <h1 className="">Mobil Paling Sering Dirental</h1>
            </div>
            <div className="w-full p-3 mt-4">
              <BarChart
                h={200}
                data={dataUnit}
                dataKey="name"
                series={[
                  { name: "RENTALS", color: "violet.6", valueKey: "RENTALS" },
                ]}
                tickLine="y"
              />
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
