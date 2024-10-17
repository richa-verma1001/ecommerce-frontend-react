import React from "react";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import UserProfile from "./auth/UserProfile";
import "../styles/auth.css";

const Login = () => {
  return (
    <div className="auth-navBar">
      <LoginButton />
      <UserProfile />
      <LogoutButton />
    </div>
  );
};

export default Login;
