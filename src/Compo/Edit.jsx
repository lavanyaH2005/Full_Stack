import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    name: "",
    email: ""
  });

  // FETCH USER BY ID (for pre-fill)
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  // UPDATE VALUES IN STATE
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // SUBMIT UPDATED DATA
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/"); // go back to home
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3 border rounded p-4 shadow">

        <h2 className="text-center mb-4 fw-bold text-dark">
          ✨ Update User Details
        </h2>

        <form onSubmit={(e) => onSubmit(e)}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={onInputChange}
              className="form-control shadow-sm"
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
