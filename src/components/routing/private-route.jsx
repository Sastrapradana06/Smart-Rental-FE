import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  const user = localStorage.getItem("user");
  const token = Cookies.get("token");

  console.log({ user, token });

  if (!user || !token) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
