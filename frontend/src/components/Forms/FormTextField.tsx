import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
}

interface Config extends Props {
  error?: boolean;
  fullWidth: true;
  helperText?: string;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
  onChange: (e: React.ChangeEvent<any>) => void;
  value: string;
  variant: any;
}

export const FormTextField = ({ name, ...otherProps }: Props) => {
  const [field, mata] = useField(name);

  const configTextfield: Config = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return <TextField {...configTextfield} />;
};
