import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./NavBar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const NavHolder = () => {
    
  return (
    <>
      <Box sx={{ marginBottom: 7 }}>
        <Header />
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default NavHolder;
