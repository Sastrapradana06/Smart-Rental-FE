import { Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useDisclosure } from "@mantine/hooks";
import SidebarLanding from "./sidebar-landing";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

const NavLanding = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [activeSection, setActiveSection] = useState("#home");

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
        <a
          href="#home"
          className={`${
            activeSection == "#home" && "color-primary"
          } text-link font-semibold `}
        >
          Home
        </a>
        <a
          href="#about"
          className={`${
            activeSection == "#about" && "color-primary"
          } text-link font-semibold `}
        >
          About
        </a>
        <a
          href="#vehicle"
          className={`${
            activeSection == "#vehicle" && "color-primary"
          } text-link font-semibold `}
        >
          Vehicle Models
        </a>
        <a
          href="#contact"
          className={`${
            activeSection == "#contact" && "color-primary"
          } text-link font-semibold `}
        >
          Contact
        </a>
      </div>
      <button className="lg:hidden" onClick={open}>
        <CgMenuGridR size={40} color="rgb(255, 76, 49)" />
      </button>
      <div className="hidden lg:flex gap-8">
        <button onClick={toggleColorScheme}>
          {colorScheme === "dark" ? (
            <MdOutlineLightMode size={30} color="white" />
          ) : (
            <MdLightMode size={30} className="text-cyan-600" />
          )}
        </button>
        <Button variant="filled" color="rgb(255, 76, 49)" size="md" radius="sm">
          <p className="text-[.9rem]">Book Now</p>
        </Button>
      </div>
    </nav>
  );
};

export default NavLanding;
