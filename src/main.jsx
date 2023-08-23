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
    path: "/home",
    element: <App />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/under-construction",
    element: <UnderConstruction />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/loan-form",
    element: <LoanForm />,
  },
  {
    path: "/update/:id",
    element: <EditUser />,
  },
  {
    path: "/create",
    element: <Add />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
  {
    path: "/bye-law",
    element: <ByeLaw />,
  },
  {
    path: "/admin-registration",
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