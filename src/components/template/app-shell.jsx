import NavDashboard from "../layout/nav-dashboard";

/* eslint-disable react/prop-types */
export default function AppShell({ children }) {
  return (
    <main>
      <NavDashboard />
      <section className="w-full bg-zinc-100 px-3 h-[100vh] lg:px-6 pt-[90px] ">
        <div className="w-full  h-[400px] lg:pl-[28%]">{children}</div>
      </section>
    </main>
  );
}
