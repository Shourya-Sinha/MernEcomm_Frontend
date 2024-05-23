import React, { useContext, useEffect, useState } from "react";
import ProductComp from "../../Components/ProductComp";
import { Grid, Stack, Box, Typography, TextField, Button, Container } from "@mui/material";
import axios from 'axios';
//import { CartContext } from "../../Components/CartContext";
// import { Link, useNavigate } from "react-router-dom";
import {useCart} from '../../Components/CartContext';
// import { logoutUser } from "../../store/slice/auth";
// import { useDispatch } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [initialProducts, setInitialProducts] = useState([]);
  const { cartItems, addToCart } = useCart();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() =>{
    const fetchProducts = async () =>{
      try {
        const response = await axios.get('http://localhost:3000/allproduct');
        setProducts(response.data.product);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  },[]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleCategorySearch = async () => {
    try {
      const response = await axios.post('http://localhost:3000/search-cat-product', { catName: category });
      setProducts(response.data.products);
      setInitialProducts(response.data.products); // store the initial results
    } catch (error) {
      console.log('Error fetching products', error);
    }
  };

  const handlePriceSearch = () => {
    const filteredProducts = initialProducts.filter(product => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
    setProducts(filteredProducts);
  };

  // const HandleLogout = () =>{
  //   dispatch(logoutUser());
  //   navigate('/login');
  // };
  // const handlePriceSearch = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:3000/filter-price', { minPrice, maxPrice });
  //     setInitialProducts(response.data.products);
  //   } catch (error) {
  //     console.log('Error fetching products', error);
  //   }
  // };

  // const addToCart = (product) => {
  //   // Implement your addToCart logic here
  //   console.log('Adding to cart:', product);
  // };
  

  return (
    <>
      <Box sx={{marginTop:9}}> 
        {/* <Button variant="contained" color="primary" onClick={HandleLogout}>
        Sign Out
      </Button> */}
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ mb: 1 }}
        >
          <Typography>All Product</Typography>
          <Stack direction={"row"} sx={{ border: 1, p: 1 }} spacing={1}>
          <TextField placeholder="Enter Category" value={category} onChange={handleCategoryChange} />
            <Button onClick={handleCategorySearch}>Search</Button>
          </Stack>
          <Stack direction={"row"} sx={{ border: 1, p: 1 }} spacing={1}>
          <TextField placeholder="Enter Min Price" value={minPrice} onChange={handleMinPriceChange} />
            <TextField placeholder="Enter Max Price" value={maxPrice} onChange={handleMaxPriceChange} />
            <Button onClick={handlePriceSearch}>Search</Button>
          </Stack>
        </Stack>

        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid key={product._id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <ProductComp product={product} onAddToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
        </Container>
      </Box>
      
    </>
  );
};

export default Home;
