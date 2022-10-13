import React from "react";
import { Box, Toolbar, Container } from "@mui/material";
import { Footer } from "../Footer/Footer";

interface Props {
  children?: React.ReactNode;
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
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
