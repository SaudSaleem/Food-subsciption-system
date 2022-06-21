import "./Login.scss";
import { Box, TextField, Typography, Button } from "@mui/material";

function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "35vh",
        bgcolor: "background.paper",
        mt: "40px",
      }}
    >
      <Box
        sx={{
          width: "35%",
          bgcolor: "background.paper",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
        }}
      >
        <Typography mt={2}>Login in</Typography>
        <div className="loginFieldsBox">
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            sx={inputFieldStyles}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            sx={inputFieldStyles}
            margin="normal"
          />
        </div>
        <Button
          variant="contained"
          sx={{
            mt: "16px",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
const inputFieldStyles = {
  width: "90%",
};
export default Login;
