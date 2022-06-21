// import "./Login.scss";
import { Box, TextField, Typography, Button } from "@mui/material";

function SignUp() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "61vh",
        bgcolor: "background.paper",
        mt: "40px",
      }}
    >
      <Box
        component="form"
        sx={{
          width: "35%",
          bgcolor: "background.paper",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
        }}
      >
        <Typography mt={2}>Sign up</Typography>
        <div className="loginFieldsBox">
          <TextField
            error={invalidName.length > 0 ? true : false}
            onChange={validateName}
            helperText={invalidName.length > 0 ? invalidName.map : ""}
            id="firstName"
            label="First Name"
            variant="outlined"
            sx={inputFieldStyles}
            margin="normal"
          />

          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            sx={inputFieldStyles}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            sx={inputFieldStyles}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            sx={inputFieldStyles}
            margin="normal"
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            sx={inputFieldStyles}
            margin="normal"
          />
        </div>
        <Button
          variant="contained"
          sx={{
            mt: "20px",
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
const inputFieldStyles = {
  width: "90%",
};
const invalidName = [];
const invalidLastName = false;
const invalidEmail = false;
const invalidPassword = false;
const invalidConfirmPassword = false;

function validateName(event) {
  const name = event.target.value;
  // setTimeout(() => {
  //   const onlyLettersRegex = '^[a-zA-Z]+$'
  //   if(name.length < 3) invalidName.push('Name atleast contain 3 characters')
  //   if(name.tes)
  // },3000)
  console.log(event.target.value);
}
export default SignUp;
