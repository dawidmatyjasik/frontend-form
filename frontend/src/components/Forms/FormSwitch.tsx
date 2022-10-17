import React from "react";
import { Switch, FormControlLabel, FormGroup } from "@mui/material";
import { useField, useFormikContext } from "formik";

interface Props {
  name: string;
  label: string;
  options?: any;
}

export const FormSwitch = ({ name, label, ...otherProps }: Props) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFieldValue(name, checked);
  };

  const switchConfig = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };

  return (
    <FormGroup>
      <FormControlLabel label={label} control={<Switch {...switchConfig} />} />
    </FormGroup>
  );
};
