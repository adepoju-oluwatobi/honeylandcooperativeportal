import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import UnderConstruction from "./pages/UnderConstruction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./components/AdminDashboard"
import { ToastContainer } from "react-toastify";
import CreatedContext from "./components/Context";
import LoanForm from "./components/LoanForm";
import EditUser from "./components/EditUser";
import Add from "./components/Add";
import FAQ from "./components/FAQ";
import ByeLaw from "./components/ByeLaw";
import AdminRegistration from "./pages/AdminRegistration";

const router = createBrowserRouter([
  {
    path: "/honeylandcooperativeportal/",
    element: <App />,
  },
  {
    path: "/honeylandcooperativeportal/",
    element: <HomePage />,
  },
  {
    path: "honeylandcooperativeportal/login",
    element: <Login />,
  },
  {
    path: "honeylandcooperativeportal/admin",
    element: <Admin />,
  },
  {
    path: "honeylandcooperativeportal/register",
    element: <Register />,
  },
  {
    path: "honeylandcooperativeportal/about",
    element: <About />,
  },
  {
    path: "honeylandcooperativeportal/contact",
    element: <Contact />,
  },
  {
    path: "honeylandcooperativeportal/under-construction",
    element: <UnderConstruction />,
  },
  {
    path: "honeylandcooperativeportal/dashboard",
    element: <Dashboard />,
  },
  {
    path: "honeylandcooperativeportal/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "honeylandcooperativeportal/loan-form",
    element: <LoanForm />,
  },
  {
    path: "honeylandcooperativeportal/update/:id",
    element: <EditUser />,
  },
  {
    path: "honeylandcooperativeportal/create",
    element: <Add />,
  },
  {
    path: "honeylandcooperativeportal/FAQ",
    element: <FAQ />,
  },
  {
    path: "honeylandcooperativeportal/bye-law",
    element: <ByeLaw />,
  },
  {
    path: "honeylandcooperativeportal/admin-registration",
    element: <AdminRegistration />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreatedContext>
    <RouterProvider router={router} />
    </CreatedContext>
    <ToastContainer />
  </React.StrictMode>

);
