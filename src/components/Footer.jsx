import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="wrapper _85p">
          <nav className="flex jc-sb">
            <ul className="flex jc-sa ai-c">
              <li>
                <Link className="white medium" to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className="white medium" to="/projects">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link className="white medium" to="/two">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link className="white medium" to="/two">
                  CONTACT
                </Link>
              </li>
            </ul>
            <Link to="/" className="left f-32 white regular">
              Sergio Camacho
              <br />
              <span className="f-20 bold">Full Stack Web Developer</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
