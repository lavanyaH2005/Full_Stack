import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {

    const navigate = useNavigate();

    const API = import.meta.env.VITE_API_URL|| "";

const [adduser, setAdduser] = useState({
    username:"",
    name:"",
    email:""
});
const {username, name, email} = adduser;

  const onInputChange = (e) => {
    setAdduser({ ...adduser, [e.target.name]: e.target.value });
  };
 
   
    const onSubmitdet = async (e) => {
        e.preventDefault();
        // ✅ Use environment variable for backend URL
        await axios.post(`${API}/user`, adduser);

        navigate("/");
    };


  return (
   <div className="d-flex justify-content-center align-items-center mt-5">
  <div className="col-md-6">
    <div className="card shadow-lg border-0 rounded-4 p-4">
      <h2 className="text-center mb-4 fw-bold">Register New User</h2>

      <form onSubmit={(e)=>onSubmitdet(e)}>
        <div className="form-group mb-3">
          <label className="fw-semibold">Username</label>
          <input
            type="text"
            className="form-control shadow-sm"
            name="username"
            value={username}
          onChange={onInputChange}
          />
        </div>

        <div className="form-group mb-3">
          <label className="fw-semibold">Name with Initial *</label>
          <input
            type="text"
            className="form-control shadow-sm"
            name="name"
            value={name}
            onChange={onInputChange}
          />
        </div>

        <div className="form-group mb-3">
          <label className="fw-semibold">Email address</label>
          <input
            type="email"
            className="form-control shadow-sm"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone.
          </small>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Accept Terms
          </label>
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/" type="button" className="btn btn-outline-secondary px-4 py-2 rounded-3 shadow">
            Cancel
          </Link>

          <button type="submit" className="btn btn-primary px-4 py-2 rounded-3 shadow">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}



export default Add