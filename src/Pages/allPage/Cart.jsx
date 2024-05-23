import React, { useState } from "react";
import { Box, Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import {useCart} from '../../Components/CartContext';
import { Rating } from "react-simple-star-rating";
import {Add, Remove} from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";


const Cart = () => {
  // const { cartItems } = useCart();

  // if (!cartItems || cartItems.length === 0) {
  //   return <Typography variant="h6">Your cart is empty</Typography>;
  // }
  // let totalPrice = 0;
  // cartItems.forEach((item) => {
  //   const quantity = item.quantity || 1; // Default quantity to 1 if not defined
  //   totalPrice += item.price * quantity;
  // });
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  if (!cartItems || cartItems.length === 0) {
    return <Typography variant="h6">Your cart is empty</Typography>;
  }

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * (item.quantity || 1);
  });

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity > 0) {
      updateQuantity(itemId, quantity);
    } else {
      removeFromCart(itemId);
    }
  };

  const handleProceedToCheckout = () =>{
    navigate('/checkout');
  };

  return (

    <>
   <Container>
      <Box>
        <Typography variant="h6">Cart Page</Typography>
        <Stack sx={{my:2}}>
         <Link to={'/'} ><Typography>Home</Typography> </Link>
        </Stack>
        {cartItems.map((item, index) => (
          <Stack key={index} sx={{ border: 1, mb: 2 }}>
            <Grid container>
              <Grid item xs={12} md={3}>
                <img
                  src={item.image || 'path/to/default/image.jpg'}
                  alt="Product Image"
                  style={{ maxWidth: 250, objectFit: "contain" }}
                  onError={(e) => { e.target.src = 'path/to/default/image.jpg'; }}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ justifyContent: "space-between" }}>
                <Stack justifyContent={"space-between"} spacing={0.5}>
                  <Typography variant="body2">{item.Product_name}</Typography>
                  <Typography variant="caption">{item.description}</Typography>
                  <Typography variant="subtitle2" sx={{ color: "green" }}>$ {item.price}</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton
                      onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                    >
                      <Remove />
                    </IconButton>
                    <Typography variant="body2">{item.quantity || 1}</Typography>
                    <IconButton
                      onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                    >
                      <Add />
                    </IconButton>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="body2">Ratings: {item.rating}</Typography>
                    <Rating initialValue={4} size={18} />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        ))}
        <Stack>
        <Typography variant="body2">Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</Typography>
          <Button variant="contained" onClick={handleProceedToCheckout}>Proceed to Buy</Button>
        </Stack>
      </Box>
    </Container>
    </>
  );
};

export default Cart;
