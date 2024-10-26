import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../styles/auth.css";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <a className="navbar" href="#" onClick={() => loginWithRedirect()}>
          Login
        </a>
      )}
    </div>
  );
}

export default LoginButton;
