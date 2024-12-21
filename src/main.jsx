import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import Login from "./pages/auth/login.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Unit from "./pages/unit/index.jsx";
import AddUnit from "./pages/unit/add.jsx";
import DetailUnit from "./pages/unit/detail.jsx";
import Reservasi from "./pages/reservasi/index.jsx";
import CreateReservasi from "./pages/reservasi/create.jsx";
import Pelanggan from "./pages/pelanggan/index.jsx";
import AddPelanggan from "./pages/pelanggan/add.jsx";
import Transaksi from "./pages/transaksi/index.jsx";
import User from "./pages/user/index.jsx";
import AddUsers from "./pages/user/add.jsx";
import Roles from "./pages/roles/index.jsx";
import AddRoles from "./pages/roles/add.jsx";
const theme = {
  fontFamily: "", // Menggunakan font Nunito
};

createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme} defaultColorScheme="light">
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/unit" element={<Unit />} />
          <Route path="/unit/add" element={<AddUnit />} />
          <Route path="/unit/:id" element={<DetailUnit />} />

          <Route path="/reservasi" element={<Reservasi />} />
          <Route path="/reservasi/create" element={<CreateReservasi />} />

          <Route path="/pelanggan" element={<Pelanggan />} />
          <Route path="/pelanggan/add" element={<AddPelanggan />} />

          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/add" element={<AddUsers />} />

          <Route path="/roles" element={<Roles />} />
          <Route path="/roles/add" element={<AddRoles />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </MantineProvider>
);
