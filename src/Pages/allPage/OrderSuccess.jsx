// OrderSuccess.jsx
import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const OrderSuccess = () => {
  return (
    <Container>
      <Typography variant="h4">Order Successful!</Typography>
      <Typography variant="body1">Thank you for your purchase.</Typography>
      <Stack sx={{mt:4}}>
       <Link to={'/cart'}><Typography> Back to Cart </Typography></Link>
       <Link to={'/'}><Typography> Back to Home </Typography> </Link>
      </Stack>
    </Container>
  );
};

export default OrderSuccess;
