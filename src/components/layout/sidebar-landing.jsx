/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import {
  Drawer,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

const SidebarLanding = ({ opened, close }) => {
  const { hash } = useLocation();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  const LinkList = ({ link, teks }) => {
    return (
      <a href={link}>
        <p
          className={`text-link ${hash === link ? "color-primary" : ""}`}
          onClick={close}
        >
          {teks}
        </p>
      </a>
    );
  };

  return (
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
        <img
          src="/icons-car.png"
          alt="icons"
          className=" w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
        />
      }
    >
      <div className="flex flex-col  gap-5">
        <a href="#home">
          <p
            onClick={close}
            className={`text-link ${
              hash === "#home" || hash === "" ? "color-primary" : ""
            }`}
          >
            Home
          </p>
        </a>
        <LinkList link="#about" teks="About" />
        <LinkList link="#vehicle" teks="Vehicle Models" />
        <LinkList link="#contact" teks="Contact" />
        <button onClick={toggleColorScheme}>
          {colorScheme === "dark" ? (
            <MdOutlineLightMode size={25} color="white" />
          ) : (
            <MdLightMode size={25} className="text-cyan-600" />
          )}
        </button>
      </div>
    </Drawer>
  );
};

export default SidebarLanding;
