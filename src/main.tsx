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
import ResultQuestion from "./pages/ResultQuestion";
import PageTest from "./pages/PageTest";

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
    path: "PinEntryScreen",
    element: <PinEntryScreen />,
  },
  {
    path: "LoadingScreen",
    element: <LoadingScreen />,
  },
  {
    path: "FourOptionQuestion",
    element: <FourOptionQuestion />,
  },
  {
    path: "TwoOptionQuestion",
    element: <TwoOptionQuestion />,
  },
  {
    path: "ResultQuestion",
    element: <ResultQuestion />,
  },
  {
    path: "PageTest",
    element: <PageTest />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
