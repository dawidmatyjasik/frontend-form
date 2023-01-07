import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField, TextFieldProps } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type FormInputProps = {
  name: string;
  props?: {};
} & TextFieldProps;

const FormInputDate: FC<FormInputProps> = ({ name, props, ...otherProps }) => {
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
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              onChange={(date) => {
                field.onChange(date.toDate());
              }}
              value={field.value}
              renderInput={(params) => (
                <TextField
                  {...field}
                  {...params}
                  {...otherProps}
                  error={!!errors[name]}
                  fullWidth={true}
                  helperText={
                    errors[name]
                      ? (errors[name]?.message as unknown as string)
                      : ""
                  }
                />
              )}
            />
          </LocalizationProvider>
        )}
      />
    </Grid>
  );
};

export default FormInputDate;
