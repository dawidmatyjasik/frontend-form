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

export const StudentsPage = () => {
  return (
    <FormWrapper init={personalInit} validator={personalValidator}>
      <Header title="Dane osobowe" />
      {personalSchema.map((input) => {
        const { Component, label, name, inputProps } = input;
        return (
          <Grid item {...inputProps}>
            <Component name={name} label={label} />
          </Grid>
        );
      })}
      <Grid item xs={4} my={2}>
        <FormButton>Dodaj użytkownika</FormButton>
      </Grid>
    </FormWrapper>
  );
};
