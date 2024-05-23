import React, { useState } from 'react'
import { useCart } from '../../Components/CartContext';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/slice/cartslice';


const CheckOutPage = () => {
    const { cartItems } = useSelector(state => state.cart);
    const token = useSelector(state => state.auth.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const {cartItems, clearCart} = useCart();

    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        state: '',
        phoneNo: '',
        pincode: '',
        country:''
    });
    //const navigate = useNavigate();
    //const token = useSelector(state => state.auth.token);
    const handleShippingInfoChange =(e) =>{
        setShippingInfo({...shippingInfo,[e.target.name]: e.target.value});
    };

    const handlePurchase =async () =>{
        if (!token) {
            console.error('No token found');
            return;
          }
        const orderData = {
            orderItems: cartItems.map((item) =>({
                name: item.Product_name,
                price: item.price,
                quantity: item.quantity,
                image: item.image,
                product: item._id,
            })),
            shippingInfo: shippingInfo,
            paymentInfo:{
                id:'438927iowdfguhjk4',
                status:'Paid'
            },
            totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
            //totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        };
        try {
            const response = await axios.post('http://localhost:3000/create-order', orderData, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            console.log('Order created:', response.data);
            dispatch(clearCart());
            navigate('/order-success');
          } catch (error) {
            console.error('Error creating order:', error);
          }
    }
  return (
   <>
 <Container>
      <Box>
        <Typography variant="h6">Checkout Page</Typography>
        <TextField
          label="Address"
          name="address"
          value={shippingInfo.address}
          onChange={handleShippingInfoChange}
          fullWidth
        />
        <TextField
          label="City"
          name="city"
          value={shippingInfo.city}
          onChange={handleShippingInfoChange}
          fullWidth
        />
        <TextField
          label="State"
          name="state"
          value={shippingInfo.state}
          onChange={handleShippingInfoChange}
          fullWidth
        />
        <TextField
          label="Country"
          name="country"
          value={shippingInfo.country}
          onChange={handleShippingInfoChange}
          fullWidth
        />
        <TextField
          label="Pincode"
          name="pincode"
          value={shippingInfo.pincode}
          onChange={handleShippingInfoChange}
          fullWidth
        />
        <TextField
          label="Phone Number"
          name="phoneNo"
          value={shippingInfo.phoneNo}
          onChange={handleShippingInfoChange}
          fullWidth
        />
        <Button variant="contained" onClick={handlePurchase}>Purchase</Button>
      </Box>
    </Container>
   </>
  )
}

export default CheckOutPage;