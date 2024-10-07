import { Button } from "@mui/material";
import React, { useState } from "react";
import "./savePassword.css";

const SavePassword = () => {
  const [SavedPassword, setSavedPassword] = useState([]);
  const [webLink, setWebLink] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [inputValue, setInputValue] = useState({
    link: "",
    username: "",
    password: "",
  });

  const handleAddSavePassword = () => {
    setInputValue({
      link: webLink,
      username: userName,
      password: userPassword,
    });

    if (editIndex !== null) {
      const updatedList = SavedPassword.map((item, index) =>
        index === editIndex ? inputValue : item
      );
      setSavedPassword(updatedList);
      setEditIndex(null);
    } else {
      setSavedPassword([...SavedPassword, inputValue]);
    }

    setInputValue("");
  };

  const HandleUpdatePassword = (index) => {
    setInputValue(SavedPassword[index]);
    setEditIndex(index);
  };

  const HandleDeletePassword = (index) => {
    const updatedList = SavedPassword.filter((_, i) => i !== index);
    setSavedPassword(updatedList);
  };

  return (
    <>
      <h1>Save Password</h1>
      <input
        type="text"
        value={webLink}
        onChange={(e) => setWebLink(e.target.value)}
        placeholder="Web/App link or Name"
      />
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
      />
      <input
        type="text"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        placeholder="Password"
      />
      <Button onClick={handleAddSavePassword}>
        {editIndex !== null ? "Add" : "Update"}
      </Button>
      <ul>
        {SavedPassword.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => HandleUpdatePassword(index)}>Edit</button>
            <button onClick={() => HandleDeletePassword(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SavePassword;
