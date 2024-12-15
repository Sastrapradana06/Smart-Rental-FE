import "./unit.css";

import { useParams } from "react-router-dom";
import AppShell from "../../components/template/app-shell";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useMantineColorScheme } from "@mantine/core";
import { FaCar } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { SiTransmission } from "react-icons/si";

export default function DetailUnit() {
  const { colorScheme } = useMantineColorScheme();
  const { id } = useParams();
  console.log(id);

  return (
    <AppShell>
      <main className="w-full ">
        <div className="flex items-center gap-2">
          <Link to="/unit">
            <IoIosArrowBack size={23} />
          </Link>
          <h1 className="text-[1.1rem] lg:text-[1.3rem]">Detail Unit {id}</h1>
        </div>
        <section className="w-full mt-12 ">
          <div className="w-full">
            <div className="w-[86%] h-max m-auto vehicle-content">
              <img
                src="/inova.png"
                alt="car"
                className="w-full h-full lg:w-[800px] lg:h-[400px] object-cover"
              />
              <div className="w-full lg:w-[35%] h-max ">
                <div className="border-b border-gray-400 pb-4">
                  <h1 className="text-[1.3rem] benner">
                    Rp. <span className="benner text-[2rem]">500.000</span>
                  </h1>
                  <p className="text-[.9rem] text-gray-500 mt-2">
                    rent per day
                  </p>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                  <div className="flex-horizontal gap-2 text-gray-500 w-max">
                    <FaCar
                      size={20}
                      className={`${
                        colorScheme == "dark" ? "text-gray-300" : "text-black"
                      }`}
                    />
                    <p>Model:</p>
                    <p>Sedan</p>
                  </div>
                  <div className="flex-horizontal gap-2 text-gray-500 w-max">
                    <GiCarDoor
                      size={20}
                      className={`${
                        colorScheme == "dark" ? "text-gray-300" : "text-black"
                      }`}
                    />
                    <p>Doors:</p>
                    <p>4</p>
                  </div>
                  <div className="flex-horizontal gap-2 text-gray-500 w-max">
                    <MdAirlineSeatReclineExtra
                      size={20}
                      className={`${
                        colorScheme == "dark" ? "text-gray-300" : "text-black"
                      }`}
                    />
                    <p>Seats:</p>
                    <p>8</p>
                  </div>
                  <div className="flex-horizontal gap-2 text-gray-500 w-max">
                    <SiTransmission
                      size={20}
                      className={`${
                        colorScheme == "dark" ? "text-gray-300" : "text-black"
                      }`}
                    />
                    <p>Transmission:</p>
                    <p>Manual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
