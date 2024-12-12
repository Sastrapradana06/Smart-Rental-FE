import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

export default function ToggleTheme() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  return (
    <button onClick={toggleColorScheme}>
      {colorScheme === "dark" ? (
        <MdOutlineLightMode size={30} color="white" />
      ) : (
        <MdLightMode size={30} className="text-cyan-600" />
      )}
    </button>
  );
}
