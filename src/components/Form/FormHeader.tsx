import { Grid } from "@mui/material";
import React from "react";

interface IHeader {
  label: string;
}

const FormHeader = ({ label }: IHeader) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        margin: "0 0 30px 0",
      }}
    >
      <h1 className="text-4xl text-center">{label}</h1>
    </Grid>
  );
};

export default FormHeader;
