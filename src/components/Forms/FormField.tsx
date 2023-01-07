import React from "react";
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
  type?: string;
}

interface Config extends Props {
  error?: boolean;
  fullWidth: true;
  helperText?: string;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
  onChange: (e: React.ChangeEvent<any>) => void;
  value: string;
  variant: any;
  maskInput?: boolean;
}

export const FormField = ({ name, type = "text", ...otherProps }: Props) => {
  const [field, mata] = useField(name);

  const configTextfield: Config = {
    ...field,
    ...otherProps,
    type,
    fullWidth: true,
    variant: "outlined",
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  if (configTextfield.maskInput) {
    return (
      <InputMask maskChar="" {...configTextfield}>
        {(inputProps: any) => <TextField {...inputProps} disableUnderline />}
      </InputMask>
    );
  }

  return <TextField {...configTextfield} />;
};
