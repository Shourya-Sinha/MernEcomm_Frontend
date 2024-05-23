import React, { useState } from "react";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import {useDropzone} from 'react-dropzone';
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddProduct = () => {
    const [productData, setProductData] = useState({
        Product_name:'',
        price:'',
        description:'',
        quantity:'',
        category:'',
        rating:'',
        //image:''
    });
    const token = useSelector((state) => state.auth.token);
    const [files,setFiles] =useState([]);

    const onDrop = acceptedFiles =>{
        setFiles(acceptedFiles);
    };
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        //multiple:true,
        accept:'image/*'
    });

    const handleChange=(e) =>{
        setProductData({
            ...productData, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const formData = new FormData();
            Object.keys(productData).forEach(key =>{
                formData.append(key, productData[key]);
            });
            files.forEach((file) => {
                formData.append('images', file);
            });

            const response = await axios.post('http://localhost:3000/add-product', formData,{
                headers: {
                    'Content-Type':'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response.data);

        } catch (error) {
            console.log('Error in uploading product', error);
        }
    }
  return (
    <>
      <Container>
      <Link to={'/'}> <Typography>Home</Typography> </Link>
        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="h6">Add Product</Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1}>
              <TextField
                placeholder="Enter Product Name"
                name="Product_name"
                value={productData.Product_name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                placeholder="Enter Product Price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                fullWidth
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <TextField
                placeholder="Enter Product Description"
                name="description"
                value={productData.description}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                placeholder="Enter Product Quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleChange}
                fullWidth
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <TextField
                placeholder="Enter Product Category"
                name="category"
                value={productData.category}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                placeholder="Enter Product Rating"
                type="number"
                name="rating"
                value={productData.rating}
                onChange={handleChange}
                fullWidth
              />
            </Stack>
            <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
              <input {...getInputProps()} />
              <p>Drag & drop some images here, or click to select files</p>
            </div>
            <Stack direction="row" spacing={1}>
              {files.map(file => (
                <Typography key={file.name}>{file.name}</Typography>
              ))}
            </Stack>
            <Button variant="contained" type="submit">Add Product</Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default AddProduct;
