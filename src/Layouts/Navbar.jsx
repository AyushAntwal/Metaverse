import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-success">
      <div className="pt-3 px-4 d-flex justify-content-between">
        <div>
          <h3>Metaverse</h3>
        </div>
        <div>
          <ul
            className="d-flex mx-auto justify-content-between text-decoration-none"
            style={{ textDecoration: "none" }}
          >
            <p className="mx-2"><Link to='/' >Home</Link></p>
            <p className="mx-2"><Link to="store" >About</Link></p>
            <p className="mx-2"><Link to="store" >Store</Link></p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
