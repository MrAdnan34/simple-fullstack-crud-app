import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUser] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <tabel className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <button className="button is-small is-info">Edit</button>
                  <button className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </tabel>
      </div>
    </div>
  );
};

export default UserList;
