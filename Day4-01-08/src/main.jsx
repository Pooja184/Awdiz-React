import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UseContextCom from "./22aug/UseContextCom.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <UseContextCom>
        <App />
      </UseContextCom>
    </StrictMode>
  </BrowserRouter>
);
