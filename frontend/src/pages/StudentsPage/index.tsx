import React from "react";
import { Formik, Form } from "formik";
import { Container, Grid, Typography } from "@mui/material";
import * as Yup from "yup";
import { FormTextField } from "../../components/Forms/FormTextField";
import { FormButton } from "../../components/Forms/FormButton";

const INITIAL = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Imię jest wymagane"),
  lastName: Yup.string().required("Nazwisko jest wymagane"),
  email: Yup.string().email("Błędny format").required("Email jest wymagany"),
  phone: Yup.number()
    .integer()
    .typeError("Podaj poprawny numer telefonu")
    .required("Numer telefonu jest wymagany"),
});

export const StudentsPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Formik
            initialValues={{
              ...INITIAL,
            }}
            validationSchema={VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Your details</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormTextField name="firstName" label="Imię" />
                </Grid>
                <Grid item xs={6}>
                  <FormTextField name="lastName" label="Nazwisko" />
                </Grid>
                <Grid item xs={12}>
                  <FormTextField name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <FormTextField name="phone" label="Numer telefonu" />
                </Grid>
              </Grid>
              <Grid item xs={4} my={2}>
                <FormButton>Dodaj ucznia</FormButton>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </Grid>
  );
};
