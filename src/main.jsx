import Home from "./pages/Home/Home";
import Two from "./pages/Home/Two";
import Sidebar from "./components/Sidebar";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <div id="page">
        <Sidebar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/two" element={<Two />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </>
);
