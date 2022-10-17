import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
  name: string;
  otherProps: any;
}

export const FormDatePicker = ({ name, ...otherProps }: Props) => {
  const [field, meta] = useField(name);

  const configDateTimePicker: any = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return <TextField {...configDateTimePicker} />;
};
