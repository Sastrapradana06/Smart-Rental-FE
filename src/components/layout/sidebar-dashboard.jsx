/* eslint-disable react/prop-types */
import { AiOutlineHome } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LiaCarSolid } from "react-icons/lia";
import { IoFileTrayOutline } from "react-icons/io5";
import { BiSolidUserDetail } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { PiUsersThreeBold } from "react-icons/pi";
import { RiUserSettingsLine } from "react-icons/ri";
import { Drawer } from "@mantine/core";
import { GoShieldLock } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { useCancelQuery } from "../../api/queries/useCustomQuery";

export default function SidebarDashboard({ opened, close }) {
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { cancelQuery } = useCancelQuery();

  const modules = [
    {
      title: "Dashboard",
      icon: AiOutlineHome,
      path: "/dashboard",
    },
    { title: "Unit", icon: LiaCarSolid, path: "/unit" },
    {
      title: "Reservasi",
      icon: IoFileTrayOutline,
      path: "/reservasi",
    },
    {
      title: "Pelanggan",
      icon: BiSolidUserDetail,
      path: "/pelanggan",
    },
    {
      title: "Transaksi",
      icon: GrTransaction,
      path: "/transaksi",
    },
    {
      title: "Users",
      icon: PiUsersThreeBold,
      path: "/users",
    },
    {
      title: "Profile",
      icon: RiUserSettingsLine,
      path: "/profile",
    },
  ];

  const logOut = async () => {
    try {
      await cancelQuery();
      localStorage.removeItem("user");
      Cookies.remove("token", { path: "/" });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const LinkNavigasi = ({ link, Icons, teks }) => {
    return (
      <Link
        to={link}
        className={`w-full flex items-center gap-3  p-2 rounded-md cursor-pointer hover:bg-zinc-200 duration-200 ${
          pathname.includes(link) ? "bg-zinc-200 text-violet-500" : ""
        }`}
      >
        <Icons
          size={20}
          className={`${
            pathname.includes(link) ? " text-violet-500" : "text-gray-500"
          }`}
        />
        <p className="font-semibold text-[.9rem]">{teks}</p>
      </Link>
    );
  };

  const BtnLogout = () => {
    return (
      <button
        className="w-full flex items-center gap-3  p-2 rounded-md cursor-pointer hover:bg-zinc-200 duration-200"
        onClick={logOut}
      >
        <IoLogOutOutline size={20} className={`text-red-500`} />
        <p className="font-semibold text-[.9rem] text-red-400">Log out</p>
      </button>
    );
  };

  const SidebarNavigasi = () => {
    return (
      <>
        <div className="w-full flex-vertical gap-1 mt-4 lg:-mt-3">
          {modules.map((module, index) => (
            <LinkNavigasi
              key={index}
              link={module.path}
              Icons={module.icon}
              teks={module.title}
            />
          ))}
        </div>
        <div className="mt-8 ">
          <p className="text-gray-500 text-[.9rem] font-semibold p-1">
            User Permissions
          </p>
          <div className="w-full flex-vertical gap-1 ">
            <LinkNavigasi link="/roles" Icons={GoShieldLock} teks="Roles" />
            <BtnLogout />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Drawer
        offset={1}
        size={"80%"}
        opened={opened}
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.4, blur: 4 }}
        transitionProps={{
          transition: "rotate-right",
          duration: 200,
          timingFunction: "linear",
        }}
        title={
          <h1 className="text-[.9rem]">
            Selamat Datang,{" "}
            <span className="text-orange-500 font-semibold capitalize">
              {user?.name}
            </span>
          </h1>
        }
      >
        <SidebarNavigasi />
      </Drawer>

      <div className="hidden w-[25%] h-max fixed top-[100px] left-0 px-6 lg:block">
        <SidebarNavigasi />
      </div>
    </>
  );
}
