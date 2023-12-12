import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SecureRouteProps } from "./SecureRoute.types";
import { FloatButton } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const SecureRoute: React.FC<SecureRouteProps> = (props: SecureRouteProps) => {
  const { component: Component } = props;
const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" />;
  }
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
  <div>
    <FloatButton icon={<LogoutOutlined />} tooltip="Logout" onClick={()=> logout()} />
    <Component />
  </div>);
};

export default SecureRoute;
