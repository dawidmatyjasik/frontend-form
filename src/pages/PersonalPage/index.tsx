import { Grid } from "@mui/material";
import { FormButton } from "../../components/Forms/FormButton";
import { personalValidator } from "../../../../common/personal/validator";
import { personalInit } from "../../../../common/personal/init";
import { FormWrapper } from "../../components/Content/FormWrapper";
import { Header } from "../../components/Content/Header";
import { Content } from "./Content";

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
