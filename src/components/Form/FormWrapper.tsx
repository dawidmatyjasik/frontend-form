import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { FormProvider } from "react-hook-form";

const FormWrapper = ({ methods, onSubmitHandler, children }: any) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <Paper sx={{ p: 4, display: "flex", flexDirection: "column" }}>
          <Grid container spacing={2}>
            {children}
          </Grid>
        </Paper>
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
