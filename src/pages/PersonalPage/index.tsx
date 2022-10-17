import React from "react";
import { Formik, Form } from "formik";
import { Container, Grid, Typography } from "@mui/material";
import { FormField } from "../../components/Forms/FormField";
import { FormButton } from "../../components/Forms/FormButton";
import { personalValidator } from "../../common/personal/validator";
import { personalInit } from "../../common/personal/init";
import { personalSchema } from "../../common/personal/schema";
import { FormWrapper } from "../../components/Content/FormWrapper";
import { Header } from "../../components/Content/Header";
import { useFormikContext, useField } from "formik";
import { Content } from "./Content";

interface Input {
  Component?: any;
  label: string;
  name: string;
  inputProps?: any;
  componentProps?: any;
}

export const PersonalPage = () => {
  return (
    <FormWrapper init={personalInit} validator={personalValidator}>
      <Header title="Dane osobowe" />
      <Content />
      <Grid item xs={12} sm={4} my={2}>
        <FormButton>Dodaj użytkownika</FormButton>
      </Grid>
    </FormWrapper>
  );
};
