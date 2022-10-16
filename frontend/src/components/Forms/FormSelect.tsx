import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

interface Props {
  name: string;
  options?: any;
}

interface Config extends Props {
  select: boolean;
  variant: any;
  fullWidth: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

export const FormSelect = ({ name, options, ...otherProps }: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect: Config = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChnage,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {Object?.keys(options)?.map((item, idx) => (
        <MenuItem key={idx} value={item}>
          {options[item]}
        </MenuItem>
      ))}
    </TextField>
  );
};
