import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext.jsx";
import { ClickProvider } from "./context/clickContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ClickProvider>
          <App />
        </ClickProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
