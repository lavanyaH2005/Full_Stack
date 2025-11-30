import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

function Home() {
  const API =import.meta.env.VITE_API_URL || ""

  const [user, setUser] = useState([])

  const loadUsers = async () => {
    try {
      const loadDeta = await axios.get(`${API}/user`)
      setUser(loadDeta.data)
    } catch (error) {
      console.error("Failed to load users:", error.response?.data || error.message)
    }
  }

  const onHandleDelete = async (id) => {
    try {
      await axios.delete(`${API}/user/${id}`)
      loadUsers() // refresh the list
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error.message)
      alert("Failed to delete user. Please try again.")
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">S.NO</th>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
          {user.map((use, index) => (
            <tr key={use.id || index}>
              <th scope="row">{index + 1}</th>
              <td>{use.username}</td>
              <td>{use.name}</td>
              <td>{use.email}</td>
              <td>
                <Link to={`/view/${use.id}`} className="btn btn-outline-success btn-sm me-2">View</Link>
                <Link to={`/edit/${use.id}`} className="btn btn-outline-info btn-sm me-2">Update</Link>
                <button onClick={() => onHandleDelete(use.id)} className="btn btn-outline-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
