import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LanguageContextProvider from "./context/LanguageContent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </StrictMode>
);
