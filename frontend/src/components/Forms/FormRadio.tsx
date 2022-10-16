import React from "react";
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

const options = ["Mężczyzna", "Kobieta"];

interface Props {
  name: string;
  label: string;
  legend?: string;
  options?: any;
  row?: boolean;
}

interface ConfigFormControl {
  error?: boolean;
}

export const FormRadio = ({
  name,
  label,
  legend,
  row,
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
        {options?.map((item, idx) => (
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
