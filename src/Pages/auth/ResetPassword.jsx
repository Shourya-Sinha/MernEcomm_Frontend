import React from "react";
import { Button, Container, Stack, TextField } from "@mui/material";

const ResetPassword = () => {
  return (
    <>
      <Container maxWidth="md">
        <Stack spacing={2}>
          <TextField placeholder="Enter Your Email"> </TextField>
          <Stack direction={"row"} spacing={1}>
            <TextField placeholder="Enter Your Password" sx={{ flex: 1 }} />

            <TextField
              placeholder="Enter Your Confirm Password"
              sx={{ flex: 1 }}
            />
          </Stack>

          <Button fullWidth variant="outlined">
            Submit
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default ResetPassword;
