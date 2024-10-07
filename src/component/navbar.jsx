import { Box, Grid2 } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff",
          height: 15,
          padding: 2,
        }}
      >
        <Grid2 sm={6}>LOGO/NAME</Grid2>
        <Grid2 container spacing={2} sm={6}>
          <Grid2 item sm={4}>
            HOME
          </Grid2>
          <Grid2 item sm={4}>
            NEW
          </Grid2>
          <Grid2 item sm={4}>
            HISTORY
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Navbar;
