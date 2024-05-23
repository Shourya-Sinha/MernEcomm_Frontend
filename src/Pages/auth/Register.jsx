import React from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import FormProvider from "../../../utils/FormProvider";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../store/slice/auth";


const Register = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // if (formValues.password !== formValues.confirmPassword) {
      //   alert('Passwords do not match');
      //   return;
      // }
      dispatch(RegisterUser(formValues));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container maxWidth="md">
        <form method="method" onSubmit={onSubmit}>
          <Stack spacing={2}>
            <TextField
              name="userName"
              placeholder="Enter Your Full Name"
              value={formValues.name}
              onChange={handleChange}
            ></TextField>
            <TextField
              name="email"
              placeholder="Enter Your Email"
              value={formValues.email}
              onChange={handleChange}
            >
              {" "}
            </TextField>
            <Stack direction={"row"} spacing={1}>
              <TextField
                name="password"
                placeholder="Enter Your Password"
                sx={{ flex: 1 }}
                value={formValues.password}
                onChange={handleChange}
              />

              <TextField
                name="confirmPassword"
                placeholder="Enter Your Confirm Password"
                value={formValues.confirmPassword}
                onChange={handleChange}
                sx={{ flex: 1 }}
              />
            </Stack>

            <Button type="submit" fullWidth variant="outlined">
              Register
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  );
};

export default Register;
