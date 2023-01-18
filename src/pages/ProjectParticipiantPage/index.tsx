import { useForm } from "react-hook-form";
import { FC } from "react";
import FormWrapper from "../../components/Form/FormWrapper";
import { validator } from "../../../../common/projectParticipiant/validator";
import { defaultValues } from "../../../../common/projectParticipiant/init";
import { schema } from "../../../../common/projectParticipiant/schema";
import UserActions from "../../components/Form/UserAction";
import { FormButton } from "../../components/Form/FormButton";
import { ajvResolver } from "@hookform/resolvers/ajv";

export const ProjectParticipiantPage: FC = () => {
  const methods = useForm({
    resolver: ajvResolver(validator),
    defaultValues,
  });

  const onSubmitHandler = async (values) => {
    console.log(values);
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
