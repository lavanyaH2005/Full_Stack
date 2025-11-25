import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container">
        <a className="navbar-brand fs-4 fw-bold" href="#">
          Employee_Details
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-3" id="navbarNav">
          <Link to = "/add" className="btn btn-primary px-4 ms-auto">
            Add Users
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
