import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="row">
      <div className="col-2">
        <h3 className="name-logo">
          PEACE <br /> AKPAI
        </h3>

        <nav className="navmenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="wrapper">
          <div className="single-item">
            <a
              href="https://www.linkedin.com/in/peace-akpai-2a292097/"
              target="_blank"
            >
              <div className="box">
                <p>
                  <i className="fa fa-linkedin"></i>
                </p>
              </div>
            </a>
            <a href="#">
              <div className="box">
                <p>
                  <i className="fa fa-facebook" target="_blank"></i>
                </p>
              </div>
            </a>
          </div>

          <div className="single-item">
            <a href="https://github.com/peaceawo" target="_blank">
              <div className="box">
                <p>
                  <i className="fa fa-github"></i>
                </p>
              </div>
            </a>
            <a href="#" target="_blank">
              <div className="box">
                <p>
                  <i className="fa fa-reddit"></i>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
