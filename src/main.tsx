import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import WelcomeScreen from "./pages/WelcomeScreen";
import LoadingScreen from "./pages/LoadingScreen";
import PinEntryScreen from "./pages/PinEntryScreen";
import FourOptionQuestion from "./pages/FourOptionQuestion ";
import TwoOptionQuestion from "./pages/TwoOptionQuestion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
  },
  {
    path: "welcomeScreen",
    element: <WelcomeScreen />,
  },
  {
    path: "LoadingScreen",
    element: <LoadingScreen />,
  },
  {
    path: "PinEntryScreen",
    element: <PinEntryScreen />,
  },
  {
    path: "FourOptionQuestion",
    element: <FourOptionQuestion />,
  },
  {
    path: "TwoOptionQuestion",
    element: <TwoOptionQuestion />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
