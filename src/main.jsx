/**
 * @copyright 2024 shubhamvadkedev
 * @licence Apache-2.0
 */

/**
 * NODE MODULES
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";

/**
 * COMPONENTS
 */
import App from "./App.jsx";

/**
 * CSS LINK
 */
import "./index.css";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>
);
