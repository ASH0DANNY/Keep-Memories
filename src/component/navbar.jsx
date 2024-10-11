import { Box, Grid2 } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff",
          height: 50,
        }}
      >
        <Grid2 sm={6} xs={12}>
          LOGO/NAME
        </Grid2>
        <Grid2 container spacing={2}>
          <Grid2 item sm={4}>
            <Link to="/" style={linkStyle}>
              HOME
            </Link>
          </Grid2>
          <Grid2 item sm={4}>
            <Link to="/todo" style={linkStyle}>
              TODO
            </Link>
          </Grid2>
          <Grid2 item sm={4}>
            <Link to="/savepassword" style={linkStyle}>
              SavePass
            </Link>
          </Grid2>
          <Grid2 item sm={4}>
            <Link to="/add_birthday" style={linkStyle}>
              Birthday
            </Link>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Navbar;
