import { useForm } from "react-hook-form";
import { FC } from "react";
import FormWrapper from "../../components/Form/FormWrapper";
import { validator } from "../../../../common/personal/validator";
import { schema } from "../../../../common/personal/schema";
import UserActions from "../../components/Form/UserAction";
import { FormButton } from "../../components/Form/FormButton";
import { apiRequest } from "../../hooks/useAxios";
import { ROUTES } from "../../../../common/routes";
import { Button } from "@mui/material";
import { useValidator } from "../../hooks/useValidator";
import { useGetPersonalQuery } from "../../store/api/personal";
import { defaultValues } from "../../../../common/personal/init";

interface IContent {
  id?: any;
  onSubmit: (values: any) => void;
}

export const Content = ({ id, onSubmit }: IContent) => {
  const resolver = useValidator({ validator });

  const data = id ? useGetPersonalQuery(id).data : defaultValues;

  const methods = useForm({
    ...resolver,
    defaultValues: data,
  });

  return (
    <>
      <FormWrapper methods={methods} onSubmitHandler={onSubmit}>
        {schema.map(({ referer, refs, ...rest }, index) => {
          return (
            <UserActions
              action={rest}
              referer={referer && referer(methods, refs)}
              methods={methods}
              key={index}
            />
          );
        })}
        <FormButton>Wyślij</FormButton>
      </FormWrapper>
    </>
  );
};
