import React from "react";
import { Link, Outlet } from "react-router-dom";
const Sidebar = () => {
  return (
    <div id="header">
      <div className="wrapper">
        <nav className="flex jc-sb">
          <Link to="/" className="left f-32 l-black regular">
            Sergio Camacho
            <br />
            <span className="f-20 bold">Full Stack Web Developer</span>
          </Link>
          <ul className="flex jc-sa ai-c">
            <li>
              <Link className="l-black medium" to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="l-black medium" to="/projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link className="l-black medium" to="/two">
                SKILLS
              </Link>
            </li>
            <li>
              <Link className="l-black medium" to="/two">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
