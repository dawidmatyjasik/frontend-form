import React from "react";
import { Formik, Form } from "formik";
import { Grid, Paper } from "@mui/material";

//TODO check types
interface Props {
  init: any;
  validator: any;
  children: React.ReactNode;
}

export const FormWrapper = ({ init, validator, children }: Props) => {
  return (
    <Formik
      initialValues={{
        ...init,
      }}
      validationSchema={validator}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Paper sx={{ p: 4, display: "flex", flexDirection: "column" }}>
          <Grid container spacing={2}>
            {children}
          </Grid>
        </Paper>
      </Form>
    </Formik>
  );
};
