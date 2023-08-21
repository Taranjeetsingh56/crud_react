/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    ...JSON.parse(localStorage.getItem("signupData")),
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    localStorage.removeItem("signupData");
    window.location.href = "/login"; // Change the URL to your desired redirection path
  };

  const handleSaveEdit = () => {
    localStorage.setItem("signupData", JSON.stringify(editedUserData));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUserData({ ...JSON.parse(localStorage.getItem("signupData")) });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h2>Welcome to Your Dashboard, {editedUserData.name}!</h2>
      <h2>hello How are you !!!</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedUserData.name}
                  onChange={handleInputChange}
                />
              ) : (
                editedUserData.name
              )}
            </td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  name="email"
                  value={editedUserData.email}
                  onChange={handleInputChange}
                />
              ) : (
                editedUserData.email
              )}
            </td>
            <td>
              {isEditing ? (
                <input
                  type="text"
                  name="contact"
                  value={editedUserData.contact}
                  onChange={handleInputChange}
                />
              ) : (
                editedUserData.contact
              )}
            </td>
            <td>
              {isEditing ? (
                <input
                  type="password"
                  name="password"
                  value={editedUserData.password}
                  onChange={handleInputChange}
                />
              ) : (
                editedUserData.password
              )}
            </td>
            <td>
              {isEditing ? (
                <>
                  <button className="btn-save" onClick={handleSaveEdit}>
                    Save
                  </button>
                  <button className="btn-cancel" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button className="btn-edit" onClick={handleEdit}>
                    Edit
                  </button>
                  <button className="btn-delete" onClick={handleDelete}>
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <Link to="/signup">
        <button className="btn-primary">LOGOUT</button>
      </Link>
    </div>
  );
};

export default Dashboard;
