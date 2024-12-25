import { Avatar, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { RiMenu2Fill } from "react-icons/ri";
import SidebarDashboard from "./sidebar-dashboard";
import ToggleTheme from "../ui/toggle-theme";
export default function NavDashboard() {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav
      className={`${
        colorScheme === "dark" ? "bg-zinc-800" : "bg-white"
      } w-full fixed z-20 top-0 left-0 px-3  lg:px-6 py-3  border-b border-gray-200`}
    >
      <SidebarDashboard opened={opened} close={close} />
      <div className="w-full flex justify-between items-center  ">
        <div className="w-max">
          <h1 className="hidden lg:block">
            Selamat Datang,{" "}
            <span className="text-teal-500 font-semibold capitalize">
              {user?.name}
            </span>
          </h1>
          <button className="lg:hidden" onClick={open}>
            <RiMenu2Fill size={25} />
          </button>
        </div>
        <div className="w-max flex items-center gap-4">
          <ToggleTheme />
          <Avatar color="cyan" radius="xl">
            MK
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
