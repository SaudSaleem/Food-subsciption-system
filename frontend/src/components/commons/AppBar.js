import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function MenuAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: 60,
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1, color: "#aeb1ba" }}>
        Food Subsciption System
      </Typography>
    </Box>
  );
}
