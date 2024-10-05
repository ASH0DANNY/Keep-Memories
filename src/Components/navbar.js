import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Container>
        <Box sx={{ bgcolor: "#000", color: "#fff" }}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>LOGO/APP-NAME</Grid>
                <Grid container xs={6} sm={8} spacing={2}>
                    <Grid item sm={4}><Link to="#">Home</Link></Grid>
                    <Grid item sm={4}><Link to="#">New</Link></Grid>
                    <Grid item sm={4}><Link to="#">History</Link></Grid>
                </Grid>
            </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Navbar;
