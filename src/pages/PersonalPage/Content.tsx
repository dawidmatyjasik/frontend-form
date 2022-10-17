import React from "react";
import { personalSchema } from "../../../../common/personal/schema";
import { Grid } from "@mui/material";
import { useFormikContext } from "formik";

interface Input {
  Component?: any;
  label: string;
  name: string;
  inputProps?: any;
  componentProps?: any;
}

export const Content = () => {
  const { values } = useFormikContext();

  return (
    <>
      {personalSchema.map((input) => {
        const { Component, label, name, inputProps, componentProps }: Input =
          input;
        return (
          <Grid item key={name} xs={12} {...inputProps}>
            <Component name={name} label={label} {...componentProps} />
          </Grid>
        );
      })}
    </>
  );
};
