import React from "react";
import { Button, Grid } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const FormButton = ({ children }: Props) => {
  return (
    <Grid item xs={12} sm={4} my={2}>
      <Button
        variant="contained"
        color="primary"
        fullWidth={true}
        type="submit"
      >
        {children}
      </Button>
    </Grid>
  );
};
