import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

interface Props {
  children: React.ReactNode;
}

interface Config {
  variant: any;
  color: any;
  fullWidth: boolean;
  onClick: () => void;
}

export const FormButton = ({ children, ...otherProps }: Props) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton: Config = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
};
