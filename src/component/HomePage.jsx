import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const linkStyle = {
    color: "blue",
    textDecoration: "none",
  };
  const CardList = ["todo", "savepassword", "add_birthday"];
  return (
    <>
      <Box sx={{ padding: 4, marginTop: 7, marginBottom: 7 }}>
        <ul>
          {CardList.map((item, index) => (
            <li key={index}>
              {item}
              <Link to={item} style={linkStyle}>Link</Link>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default HomePage;
