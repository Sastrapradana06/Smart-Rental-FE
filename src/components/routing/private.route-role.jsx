/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
const PrivateRouteRole = ({ allowedJabatan }) => {
  const user = localStorage.getItem("user");
  console.log({ user, allowedJabatan });

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  const isAllowed = allowedJabatan.includes(user.roles);

  return isAllowed ? <Outlet /> : <Navigate to={"/dashboard"} />;
};

export default PrivateRouteRole;
