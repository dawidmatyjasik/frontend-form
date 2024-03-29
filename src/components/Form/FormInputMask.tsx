import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField, TextFieldProps } from "@mui/material";
import InputMask from "react-input-mask";
import { parseErrors } from "../../utils/parseErrors";

type FormInputProps = {
  name: string;
  mask: string;
  props?: {};
} & TextFieldProps;

const FormInputMask: FC<FormInputProps> = ({
  name,
  mask,
  props,
  ...otherProps
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
        render={({ field: { ref, ...field } }) => (
          <InputMask
            {...field}
            {...otherProps}
            maskChar=""
            mask={mask}
            variant="outlined"
            error={!!errors[name]}
            fullWidth={true}
            helperText={parseErrors({ errors, name })}
          >
            {(inputProps: any) => <TextField {...inputProps} />}
          </InputMask>
        )}
      />
    </Grid>
  );
};

export default FormInputMask;
