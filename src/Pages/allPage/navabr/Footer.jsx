import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1976D2",
          width: "100%",
          my: 2,
          py: 3,
          color: "white",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Stack>
                <Typography variant="h5">Ecomm</Typography>
                <Typography>NewYork 123 street</Typography>
                <Typography>Phone: 1234567890</Typography>
                <Typography>Email: admin@gmail.com</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5">Shortcuts</Typography>
              <Stack>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </Link>
                <Link
                  to={"/myorder"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Order History
                </Link>
                <Link
                  to={"/cart"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  My Cart
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant="h5">Admin</Typography>
                <Link
                  to={"/add-product"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add Product
                </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
