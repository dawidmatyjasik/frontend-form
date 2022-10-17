import React from "react";
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

interface Props {
  name: string;
  label: string;
  options?: any;
  row?: boolean;
  componentProps?: any;
}

interface ConfigFormControl {
  error?: boolean;
}

export const FormRadio = ({
  name,
  label,
  row,
  options,
  ...otherProps
}: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(name, +value);
  };

  const configRadio = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };

  const configFormControl: ConfigFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup row={row}>
        {options?.map((item: string, idx: number) => (
          <FormControlLabel
            key={idx}
            control={<Radio {...configRadio} value={idx + 1} />}
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
