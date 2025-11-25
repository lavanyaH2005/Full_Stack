import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function View() {
  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
  });

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ width: "35rem", borderRadius: "15px" }}>
        
        <h2 className="text-center mb-4 fw-bold" style={{ letterSpacing: "1px" }}>
          👤 User Details
        </h2>

        <div className="mb-3">
          <h5 className="fw-semibold text-muted">Username</h5>
          <p className="fs-5">{user.username}</p>
        </div>

        <div className="mb-3">
          <h5 className="fw-semibold text-muted">Name</h5>
          <p className="fs-5">{user.name}</p>
        </div>

        <div className="mb-3">
          <h5 className="fw-semibold text-muted">Email</h5>
          <p className="fs-5">{user.email}</p>
        </div>

        <div className="text-center mt-4">
          <Link  
            className="btn btn-dark px-4 py-2 shadow-sm"
            style={{ borderRadius: "10px" }}
            to="/"
          >
            ⬅ Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default View;
