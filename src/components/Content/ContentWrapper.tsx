import React from "react";
import { Grid, Container } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

export const ContentWrapper = ({ children }: Props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">{children}</Container>
      </Grid>
    </Grid>
  );
};
