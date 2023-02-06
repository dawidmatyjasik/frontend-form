import { Grid } from "@mui/material";
import React from "react";

interface IHeader {
  label: string;
}

const FormSubHeader = ({ label }: IHeader) => {
  return (
    <Grid item xs={12}>
      <h1 className="text-lg text-center">{label}</h1>
    </Grid>
  );
};

export default FormSubHeader;
