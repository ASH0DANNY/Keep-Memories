import { Box, Grid2 } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff",
          height: 40
        }}
      >
        <Grid2 sm={6} xs={12}>LOGO/NAME</Grid2>
        <Grid2 container spacing={2}>
          <Grid2 item sm={4}>
            <Link to="/">HOME</Link>
          </Grid2>
          <Grid2 item sm={4}>
            <Link to="/todo">TODO</Link>
          </Grid2>
          <Grid2 item sm={4}>
            <Link to="/savepassword">SavePass</Link>
          </Grid2>
          <Grid2 item sm={4}>
            <Link to="/add_birthday">Birthday</Link>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Navbar;
