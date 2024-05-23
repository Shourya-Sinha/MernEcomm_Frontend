import React, { useEffect, useState } from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../store/slice/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn && token) {
      navigate("/");
    }
  }, [isLoggedIn, token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(LoginUser(formValues));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container maxWidth="md">
        <form method="method" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            name="email"
            placeholder="Enter Your Email"
            value={formValues.email}
            onChange={handleChange}
          >
            {" "}
          </TextField>
          <TextField
            name="password"
            placeholder="Enter Your Password"
            value={formValues.password}
            onChange={handleChange}
            sx={{ flex: 1 }}
          />
          <Button type="submit" fullWidth variant="outlined">
            Login
          </Button>
        </Stack>
        </form>
      </Container>
    </>
  );
};

export default Login;
