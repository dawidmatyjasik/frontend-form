import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField, TextFieldProps, MenuItem } from "@mui/material";
import { parseErrors } from "../../utils/parseErrors";

type FormInputProps = {
  name: string;
  options: {};
  yesNo?: boolean;
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
        render={({ field: { onChange, ...field } }) => (
          <TextField
            {...field}
            onChange={(e) => onChange(+e.target.value)}
            label={label}
            select={true}
            variant="outlined"
            error={!!errors[name]}
            fullWidth={true}
            helperText={parseErrors({ errors, name })}
          >
            {Object.values(options).map((option: any, index) => {
              return (
                <MenuItem key={index} value={+Object.keys(options)[index]}>
                  {option}
                </MenuItem>
              );
            })}
          </TextField>
        )}
      />
    </Grid>
  );
};

export default FormInputSelect;
