import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField, TextFieldProps } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

type FormInputProps = {
  name: string;
  options: string[];
  props?: {};
  radioProps: {};
  yesNo: boolean;
} & TextFieldProps;

const FormInputRadio: FC<FormInputProps> = ({
  name,
  props,
  label,
  options,
  radioProps,
  yesNo,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid item xs={12} {...props}>
      <FormControl error={!!errors[name]}>
        <FormLabel component="legend">{label}</FormLabel>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, ...field } }) => (
            <RadioGroup
              onChange={(e) => onChange(+e.target.value)}
              {...field}
              {...radioProps}
            >
              {options.map((option: string, index: number) => (
                <FormControlLabel
                  key={index}
                  value={yesNo ? index : index + 1}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          )}
        />
      </FormControl>
    </Grid>
  );
};

export default FormInputRadio;
