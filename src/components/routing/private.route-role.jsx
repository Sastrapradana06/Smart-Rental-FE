/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useRoleName } from "../../api/queries/useRoleQuery";
const PrivateRouteRole = ({ page }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { data } = useRoleName(user?.roles);

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  const isAllowed = data?.permissions.includes(page);

  return isAllowed ? <Outlet /> : <Navigate to={"/dashboard"} />;
};

export default PrivateRouteRole;
