import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/react";
import { BrowserRouter } from "react-router-dom";

const Key_CLerk = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={Key_CLerk} afterSignOutUrl={"/"}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>,
);
