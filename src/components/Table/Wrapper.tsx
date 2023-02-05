import { Grid } from "@mui/material";
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <Grid
      container
      spacing={3}
      style={{
        height: "calc(100vh - 64px)",
        width: "100%",
        display: "flex",
        padding: 20,
      }}
    >
      {children}
    </Grid>
  );
};

export default Wrapper;
