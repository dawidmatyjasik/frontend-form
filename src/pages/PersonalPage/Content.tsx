import { useForm } from "react-hook-form";
import { FC } from "react";
import FormWrapper from "../../components/Form/FormWrapper";
import { validator } from "../../../../common/personal/validator";
import { defaultValues } from "../../../../common/personal/init";
import { schema } from "../../../../common/personal/schema";
import UserActions from "../../components/Form/UserAction";
import { FormButton } from "../../components/Form/FormButton";
import { apiRequest } from "../../hooks/useAxios";
import { ROUTES } from "../../../../common/routes";
import { Button } from "@mui/material";
import { useValidator } from "../../hooks/useValidator";

export const Content: FC = () => {
  const resolver = useValidator({ validator });
  const methods = useForm({
    ...resolver,
    defaultValues,
  });

  const onSubmitHandler = async (values) => {
    values["phone_number"] = "000000000"; // TODO: format phone_number
    await apiRequest("post", ROUTES.PERSONAL.POST, values);
  };

  return (
    <>
      <FormWrapper methods={methods} onSubmitHandler={onSubmitHandler}>
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
