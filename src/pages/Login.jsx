import React from "react";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import UserProfile from "./auth/UserProfile";

const Login = () => {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <UserProfile />
    </>
  );
};

export default Login;
