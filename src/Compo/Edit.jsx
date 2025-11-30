import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Use environment variable for backend URL, fallback to empty string (relative URL)
  const API =import.meta.env.VITE_API_URL || "";

  const [user, setUser] = useState({
    username: "",
    name: "",
    email: ""
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`${API}/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Failed to load user:", error.response?.data || error.message);
    }
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/user/${id}`, user);
      navigate("/");
    } catch (error) {
      console.error("Failed to update user:", error.response?.data || error.message);
      alert("Failed to update user. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3 border rounded p-4 shadow">

        <h2 className="text-center mb-4 fw-bold text-dark">
          ✨ Update User Details
        </h2>

        <form onSubmit={onSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={onInputChange}
              className="form-control shadow-sm"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={onInputChange}
              className="form-control shadow-sm"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onInputChange}
              className="form-control shadow-sm"
              required
            />
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-primary px-4">
              Save Changes
            </button>

            <Link to="/" className="btn btn-secondary px-4">
              Cancel
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Edit;
