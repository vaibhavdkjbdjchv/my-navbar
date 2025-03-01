import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const domain = "dev-b4puqduaqy2fbl41.us.auth0.com";
const clientId = "As9JumWhCZ3BStnC517RNMXHBsdEaRSS";
const audience = "https://dev-b4puqduaqy2fbl41.us.auth0.com/api/v2/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: audience, // Ensure audience is included
      scope: "openid profile email", // Ensure correct scopes
    }}
  >
    <App />
  </Auth0Provider>
);
