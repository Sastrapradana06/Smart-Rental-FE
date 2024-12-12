import { useMantineColorScheme } from "@mantine/core";
import NavDashboard from "../layout/nav-dashboard";

/* eslint-disable react/prop-types */
export default function AppShell({ children }) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <main>
      <NavDashboard />
      <section
        className={`${
          colorScheme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
        } w-full  px-3 min-h-[100vh] max-h-max lg:px-6 pt-[90px] `}
      >
        <div className="w-full  h-max lg:pl-[28%] pb-10">{children}</div>
      </section>
    </main>
  );
}
