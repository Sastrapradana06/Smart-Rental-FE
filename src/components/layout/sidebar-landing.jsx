/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { Drawer } from "@mantine/core";

const SidebarLanding = ({ opened, close }) => {
  const { hash } = useLocation();

  const LinkList = ({ link, teks }) => {
    return (
      <a href={link}>
        <p className={`text-link ${hash === link ? "color-primary" : ""}`}>
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
            className={`text-link ${
              hash === "#home" || hash === "" ? "color-primary" : ""
            }`}
          >
            Home
          </p>
        </a>
        <LinkList link="#about" teks="About" />
        <LinkList link="#variants" teks="Variants Models" />
        <LinkList link="#contact" teks="Contact" />
      </div>
    </Drawer>
  );
};

export default SidebarLanding;
