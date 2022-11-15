import React from "react";
import { TextField } from "@mui/material";
import { FormikContextType, useField, useFormikContext } from "formik";

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
  referer?: string[];
}

export const FormConditionalTextField = ({ name, ...otherProps }: Props) => {
  const [field, mata] = useField(name);
  const { values }: FormikContextType<any> = useFormikContext();

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

  const refs = configTextfield?.referer?.map((el) => values[el]);

  if (refs?.every((ref) => ref !== true)) {
    return <></>;
  }

  return <TextField {...configTextfield} />;
};
