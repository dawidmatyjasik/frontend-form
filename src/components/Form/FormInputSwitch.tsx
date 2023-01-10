import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, Switch, TextFieldProps } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

type FormInputProps = {
  name: string;
  props?: {};
} & TextFieldProps;

const FormInputSwitch: FC<FormInputProps> = ({ name, props, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} {...props}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ...field } }) => {
          console.log(value);
          return (
            <RadioGroup {...field}>
              <FormControlLabel
                control={
                  <Switch
                    onChange={(e) => {
                      const value = e.target.checked ? 1 : 0;
                      onChange(value);
                    }}
                    checked={value}
                    {...field}
                  />
                }
                label={label}
              />
            </RadioGroup>
          );
        }}
      />
    </Grid>
  );
};

export default FormInputSwitch;
