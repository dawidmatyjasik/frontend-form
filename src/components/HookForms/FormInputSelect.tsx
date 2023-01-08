import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField, TextFieldProps, MenuItem } from "@mui/material";

type FormInputProps = {
  name: string;
  options: string[];
  props?: {};
} & TextFieldProps;

const FormInputSelect: FC<FormInputProps> = ({
  name,
  props,
  label,
  options,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid item xs={12} {...props}>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({ field: { onChange, ...field } }) => (
          <TextField
            {...field}
            onChange={(e) => onChange(+e.target.value)}
            label={label}
            select={true}
            variant="outlined"
            error={!!errors[name]}
            fullWidth={true}
            helperText={
              errors[name] ? (errors[name]?.message as unknown as string) : ""
            }
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={index + 1}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Grid>
  );
};

export default FormInputSelect;
