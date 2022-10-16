import React from "react";
import { Formik, Form } from "formik";
import { Container, Grid, Typography } from "@mui/material";
import { FormTextField } from "../../components/Forms/FormTextField";
import { FormButton } from "../../components/Forms/FormButton";
import { personalValidator } from "../../common/personal/validator";
import { personalInit } from "../../common/personal/init";
import { personalSchema } from "../../common/personal/schema";
import { FormWrapper } from "../../components/Content/FormWrapper";
import { Header } from "../../components/Content/Header";

interface Input {
  Component?: any;
  label: string;
  name: string;
  inputProps?: any;
  componentProps?: any;
}

export const StudentsPage = () => {
  return (
    <FormWrapper init={personalInit} validator={personalValidator}>
      <Header title="Dane osobowe" />
      {personalSchema.map((input) => {
        const { Component, label, name, inputProps, componentProps }: Input =
          input;
        return (
          <Grid item {...inputProps} key={name} xs={12}>
            <Component name={name} label={label} {...componentProps} />
          </Grid>
        );
      })}
      <Grid item xs={4} my={2}>
        <FormButton>Dodaj użytkownika</FormButton>
      </Grid>
    </FormWrapper>
  );
};
