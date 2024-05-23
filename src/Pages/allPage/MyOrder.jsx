import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const [orders, setOrder] = useState([]); // Correctly using useState to manage the order state
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getAll-Orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrder(res.data.order); // Ensure you're setting the order data correctly
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]); 
  return (
    <>
      <Container>
      <Box>
        <Typography variant="h6">My Order History Page</Typography>
        <Stack sx={{my:2}}>
         <Link to={'/'}> <Typography> Home </Typography> </Link>
        </Stack>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <Stack key={index} sx={{ border: 1, mb: 2 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">Order ID: {order._id}</Typography>
                  {order.orderItems.map((item, idx) => (
                    <Stack key={idx} direction="row" spacing={2} sx={{ p: 2, borderBottom: 1 }}>
                      <Box>
                        <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
                      </Box>
                      <Box>
                        <Typography variant="body2">{item.name}</Typography>
                        <Typography variant="body2">Quantity: {item.quantity}</Typography>
                        <Typography variant="subtitle2" sx={{ color: "green" }}>
                          $ {item.price}
                        </Typography>
                        <Typography variant="body2">Product ID: {item.product}</Typography>
                        <Stack direction={"row"} spacing={2}>
                          <Typography variant="body2">
                            Ratings: {item.rating}
                          </Typography>
                          <Rating initialValue={4} size={18} />
                        </Stack>
                      </Box>
                    </Stack>
                  ))}
                  <Typography variant="h6" sx={{ p: 2 }}>
                    Total Price: $ {order.totalPrice.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          ))
        ) : (
          <Typography>No orders found</Typography>
        )}
      </Box>
    </Container>
    </>
  );
};

export default MyOrder;
