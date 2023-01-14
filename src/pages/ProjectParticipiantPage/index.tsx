import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import FormWrapper from "../../components/Form/FormWrapper";
import {
  validator,
  IValidator,
} from "../../../../common/projectParticipiant/validator";
import { defaultValues } from "../../../../common/projectParticipiant/init";
import { schema } from "../../../../common/projectParticipiant/schema";
import UserActions from "../../components/Form/UserAction";
import { FormButton } from "../../components/Form/FormButton";
import { personalEnum } from "../../../../common/enum";
import { apiRequest } from "../../hooks/useAxios";
import { ROUTES } from "../../../../common/routes";

export const ProjectParticipiantPage: FC = () => {
  const methods = useForm<IValidator>({
    resolver: zodResolver(validator),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<IValidator> = async (
    values: IValidator
  ) => {
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
