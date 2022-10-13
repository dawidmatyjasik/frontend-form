import React from "react";
import { Grid, Typography } from "@mui/material";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4" align="center">
        {title}
      </Typography>
    </Grid>
  );
};
