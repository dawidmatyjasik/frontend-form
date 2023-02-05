import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField, TextFieldProps } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { parseErrors } from "../../utils/parseErrors";
import moment from "moment";

type FormInputProps = {
  name: string;
  props?: {};
  dateProps?: {};
} & TextFieldProps;

const FormInputDate: FC<FormInputProps> = ({
  name,
  props,
  dateProps,
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
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              onChange={(date) => {
                field.onChange(moment(date).format("YYYY-MM-DD"));
              }}
              value={field.value}
              {...dateProps}
              renderInput={(params) => (
                <TextField
                  {...field}
                  {...params}
                  {...otherProps}
                  error={!!errors[name]}
                  fullWidth={true}
                  helperText={parseErrors({ errors, name })}
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
