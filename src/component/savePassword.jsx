import React, { useState } from "react";

const SavePassword = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [webLink, setwebLink] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddUser = () => {
    if (editingIndex !== null) {
      // Edit existing user
      const updatedUsers = users.map((user, index) =>
        index === editingIndex ? { webLink, username, password } : user
      );
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      // Add new user
      setUsers([...users, { webLink, username, password }]);
    }
    setUsername("");
    setPassword("");
    setwebLink("");
  };

  const handleEditUser = (index) => {
    setwebLink(users[index].webLink);
    setUsername(users[index].username);
    setPassword(users[index].password);
    setEditingIndex(index);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Save Password</h1>
      <input
        type="text"
        placeholder="Username"
        value={webLink}
        onChange={(e) => setwebLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAddUser}>
        {editingIndex !== null ? "Update Password" : "Add Password"}
      </button>

      <h2>Password List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.webLink} {user.username} (*****)
            <button onClick={() => handleEditUser(index)}>Edit</button>
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavePassword;
