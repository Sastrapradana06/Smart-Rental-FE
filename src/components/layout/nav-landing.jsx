import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useDisclosure } from "@mantine/hooks";
import SidebarLanding from "./sidebar-landing";

const NavLanding = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const Logo = () => {
    return (
      <div className="w-max flex-horizontal gap-2 lg:gap-4 ">
        <img
          src="/icons-car.png"
          alt="icons"
          className=" w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
        />
        <div className="flex-vertical ">
          <h1 className="uppercase text-[1.5rem]">Smart</h1>
          <p className="-mt-2 font-semibold text-gray-600">Rental</p>
        </div>
      </div>
    );
  };

  return (
    <nav className={`nav ${isScroll ? "bg-blur" : "bg-transparent"}`}>
      <>
        <SidebarLanding opened={opened} close={close} />
      </>
      <Logo />
      <div className="nav-link gap-6 ">
        <Link to="/" className="color-primary text-link">
          Home
        </Link>
        <Link to="/" className="text-link">
          About
        </Link>
        <Link to="/" className="text-link">
          Variant Models
        </Link>
        <Link to="/" className="text-link">
          Contact
        </Link>
      </div>
      <button className="lg:hidden" onClick={open}>
        <CgMenuGridR size={40} color="rgb(255, 76, 49)" />
      </button>
      <div className="hidden lg:block">
        <Button variant="filled" color="rgb(255, 76, 49)" size="md" radius="sm">
          <p className="text-[.9rem]">Book Now</p>
        </Button>
      </div>
    </nav>
  );
};

export default NavLanding;
