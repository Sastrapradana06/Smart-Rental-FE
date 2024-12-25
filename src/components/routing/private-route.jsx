import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = localStorage.getItem("user");
  console.log({ user });

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
