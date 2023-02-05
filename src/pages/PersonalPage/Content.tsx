import { useForm } from "react-hook-form";
import { FC, useEffect } from "react";
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

  const { data, isLoading, isSuccess } = useGetPersonalQuery(id);

  const methods = useForm({
    ...resolver,
    defaultValues,
  });

  useEffect(() => {
    if (isSuccess) {
      methods.reset(data);
    }
  }, [isSuccess]);

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
