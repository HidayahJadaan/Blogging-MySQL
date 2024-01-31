import React from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?category">
            <h6>ART</h6>
          </Link>

          <Link className="link" to="/?category">
            <h6>SCIENCE</h6>
          </Link>

          <Link className="link" to="/?category">
            <h6>TECHNOLOGY</h6>
          </Link>

          <Link className="link" to="/?category">
            <h6>CINEMA</h6>
          </Link>

          <Link className="link" to="/?category">
            <h6>DEISGN</h6>
          </Link>

          <Link className="link" to="/?category">
            <h6>FOOD</h6>
          </Link>
          <span>Hidayah</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/wtite">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
