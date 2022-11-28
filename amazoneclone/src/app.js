import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar/Navbar";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar/>
  </StrictMode>
);
