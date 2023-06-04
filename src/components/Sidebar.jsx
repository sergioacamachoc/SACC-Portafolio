import React from "react";
import { Link, Outlet } from "react-router-dom";
const Sidebar = () => {
  return (
    <div id="header">
      <div className="wrapper">
        <nav className="">
          <ul className="flex jc-sa">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/2">2</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
