import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="bg-success">
      <div className="pt-3 px-4 d-flex justify-content-between">
        <div>
          <h3>Metaverse</h3>
        </div>
        <div>
          <ul className="d-flex mx-auto justify-content-between">
            <div className="mx-2">
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  "&:hover": {
                    background: "#efefef",
                  },
                }}
              >
                Home
              </a>
            </div>
            <div className="mx-2">
              <a
                href="about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </a>
            </div>
            <div className="mx-2">
              <a
                href="store"
                style={{ textDecoration: "none", color: "black" }}
              >
                Store
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
