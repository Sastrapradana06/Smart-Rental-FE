import { Avatar } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { RiMenu2Fill } from "react-icons/ri";
import SidebarDashboard from "./sidebar-dashboard";
export default function NavDashboard() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <nav className="w-full fixed z-20 top-0 left-0 bg-white px-3  lg:px-6 py-4  border-b border-gray-200">
      <SidebarDashboard opened={opened} close={close} />
      <div className="w-full flex justify-between items-center  ">
        <h1 className="hidden lg:block">
          Selamat Datang,{" "}
          <span className="text-teal-500 font-semibold">Admin</span>
        </h1>
        <button className="lg:hidden" onClick={open}>
          <RiMenu2Fill size={25} />
        </button>
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
      </div>
    </nav>
  );
}
