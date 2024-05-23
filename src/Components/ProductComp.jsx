import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Rating } from "react-simple-star-rating";
import {useCart} from '../Components/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductComp = ({ product,onAddToCart }) => {
  const imageUrl = product.images && product.images.length > 0 ? product.images[0].url : 'path/to/default/image.jpg';
  const navigate = useNavigate();

  const { addToCart } = useCart();

  // const handleAddToCart = () => {
  //   addToCart(product);
  //   navigate('/cart');
  // };

  const handleAddToCart = () => {
    addToCart({ ...product, image: imageUrl,quantity: 1 }); // Include image URL
    //navigate('/cart'); // Navigate to the cart page after adding the product
  };
  return (
    <>
     <Box sx={{ border: 1 }}>
        <Stack direction={"column"} alignItems={'center'} sx={{p:1}}>
          <img
            src={imageUrl}
            alt="Product Image"
            style={{ width: 110, height:100, objectFit: "contain" }}
            onError={(e) => { e.target.src = 'default-image-path.jpg'; }}
          />
          <Stack direction={"column"} spacing={0.2} p={1}>
            <Typography variant="body2">{product.Product_name}</Typography>
            <Typography variant="caption">
              {product.description}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "green" }}>
              $ {product.price}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="subtitle2"> {product.rating}</Typography>
              <Rating initialValue={4} size={18} />
            </Stack>
          </Stack>
          <Button variant="outlined" fullWidth onClick={handleAddToCart}>Add to Cart</Button>
        </Stack>
      </Box>
    </>
  );
};

export default ProductComp;
