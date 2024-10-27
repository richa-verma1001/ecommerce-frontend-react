import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
        <a
          className="navbar"
          href="#"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          <img className="avatar" src={user.picture} alt={user.name} />
        </a>
      )}
    </div>
  );
}

export default LogoutButton;
