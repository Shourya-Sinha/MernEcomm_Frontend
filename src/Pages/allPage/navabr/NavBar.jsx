import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../Components/CartContext";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/slice/auth";

const Header = () => {
  const { cartItems, addToCart } = useCart();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Stack
            spacing={2}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={'center'}
            sx={{ width: "100%" }}
          >
            <Stack><Link to={'/'} style={{textDecoration:'none',color:'white'}}><Typography variant="h6">Ecomm </Typography>  </Link></Stack>
            <Stack direction={"row"} spacing={2} alignItems={'center'}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                {" "}
                <Typography variant="subtitle2" color="white">
                  {" "}
                  Home
                </Typography>{" "}
              </Link>
              <Link to={"/cart"} style={{ textDecoration: "none" }}>
                {" "}
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Typography variant="subtitle2" color="white">
                    {" "}
                    Cart:
                  </Typography>{" "}
                  <Stack
                    sx={{
                      width: "13px",
                      height: "13px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cartItems.length}{" "}
                  </Stack>
                </Stack>
              </Link>
              <Link to={"/myorder"} style={{ textDecoration: "none" }}>
                {" "}
                <Typography variant="subtitle2" color="white">
                  {" "}
                  MyOrder
                </Typography>{" "}
              </Link>
              <Link to={"/add-product"} style={{ textDecoration: "none" }}>
                {" "}
                <Typography variant="subtitle2" color="white">
                  {" "}
                  Add Product
                </Typography>{" "}
              </Link>
              <Button
                variant="contained"
                color="primary"
                onClick={HandleLogout}
              >
                Sign Out
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
