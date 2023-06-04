import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Sidebar from "./components/Sidebar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/2",
    element: <>2</>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id="page">
      <Sidebar />
      <div id="content">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
