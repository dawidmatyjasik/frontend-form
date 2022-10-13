import React from "react";
import { Formik, Form } from "formik";
import { Grid } from "@mui/material";

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
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Form>
    </Formik>
  );
};
