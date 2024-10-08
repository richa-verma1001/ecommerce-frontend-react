import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTHO_DOMAIN;
const clientId = process.env.REACT_APP_AUTHO_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      // authorizationParams={{
      //   redirect_uri: window.location.origin,
      // }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
