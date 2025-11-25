import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"


function Home() {

    const [user , setUser] = useState([]);

    const loadUsers = async () => {
        const loadDeta = await axios
        .get("http://localhost:8080/user");
        setUser(loadDeta.data);
    }
    const onHandleDelete = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    };

     useEffect(() =>{
        loadUsers();
    },[]);
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
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{use.username}</td>
              <td>{use.name}</td>
              <td>{use.email}</td>
              <td>
                <Link to={`/view/${use.id}`} className="btn btn-outline-success btn-sm me-2">View</Link>

                <Link to={`/edit/${use.id}`} className="btn btn-outline-info btn-sm me-2">Update</Link>

                <button onClick={()=>onHandleDelete(use.id)} className="btn btn-outline-danger btn-sm">Delete</button>
</td>
            </tr>
          ))}
        </tbody>
</table>


</div>
  )
}

export default Home