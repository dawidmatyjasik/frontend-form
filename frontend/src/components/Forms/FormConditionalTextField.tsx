import React from "react";
import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";

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

export const FormConditionalTextField = ({ name, ...otherProps }: Props) => {
  const [field, mata] = useField(name);
  const { values } = useFormikContext();

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

  if (!values?.blackList) {
    return <></>;
  }

  return <TextField {...configTextfield} />;
};
