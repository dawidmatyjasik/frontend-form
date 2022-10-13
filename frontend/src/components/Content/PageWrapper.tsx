import React from "react";
import { Box, Toolbar } from "@mui/material";

interface Props {
  children?: React.ReactChild;
}

export const PageWrapper = ({ children }: Props) => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      {children}
      <Toolbar />
    </Box>
  );
};
