import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
        <a
          href="#"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </a>
      )}
    </div>
  );
}

export default LogoutButton;
