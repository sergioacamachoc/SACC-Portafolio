import React from "react";
import { Link, Outlet } from "react-router-dom";
const Sidebar = () => {
  return (
    <div id="header">
      <div className="wrapper">
        <nav className="flex jc-sb">
          <Link to="/" className="left">
            <p className="f-24 black bold">
              Sergio Camacho
              <br />
              <span className="f-18">Full Stack Web Developer</span>
            </p>
          </Link>
          <ul className="flex jc-sa">
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/two">SKILLS</Link>
            </li>
            <li>
              <Link to="/two">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
