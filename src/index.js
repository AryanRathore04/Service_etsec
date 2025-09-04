// new-etsec/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your page components
import Home from "./pages/Home";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import Clients from "./pages/Clients";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import ExporeCyber from "./pages/CybersecurityServices";
import SatelliteSecurity from "./pages/SatelliteSecurity";
import ExploreBlockchain from "./pages/ExploreBlockchain";
import VAPTServices from "./pages/VAPTServices";
import SecureWebDevelopment from "./pages/SecureWebDevelopment";
// import SomaDetails from './pages/SomaDetails';
import ComingSoon from "./pages/ComingSoon"; // NEW: Import ComingSoon
import NotFound from "./pages/NotFound"; // NEW: Import NotFound

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "terms", element: <Terms /> },
      { path: "clients", element: <Clients /> },
      { path: "privacy", element: <Privacy /> },
      { path: "FAQ", element: <FAQ /> },
      { path: "explorecyber", element: <ExporeCyber /> },
      { path: "satellite-security", element: <SatelliteSecurity /> },
      { path: "blockchain-solution", element: <ExploreBlockchain /> },
      { path: "vapt-services", element: <VAPTServices /> },
      { path: "secure-web-development", element: <SecureWebDevelopment /> },
      // { path: "soma", element: <SomaDetails /> },
      { path: "coming-soon", element: <ComingSoon /> }, // NEW: Coming Soon route
      { path: "*", element: <NotFound /> }, // NEW: 404 Catch-all route (MUST BE LAST)
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
