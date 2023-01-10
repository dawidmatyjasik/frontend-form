import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import FormWrapper from "../../components/Form/FormWrapper";
import {
  personalValidator,
  ILogin,
} from "../../../../common/personal/validator";
import { defaultValues } from "../../../../common/personal/init";
import { personalSchema } from "../../../../common/personal/personalSchema";
import UserActions from "../../components/Form/UserAction";

export const PersonalPage: FC = () => {
  const methods = useForm<ILogin>({
    resolver: zodResolver(personalValidator),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    console.log(values);
  };
  return (
    <>
      <FormWrapper methods={methods} onSubmitHandler={onSubmitHandler}>
        {personalSchema.map((action, index) => {
          return <UserActions action={action} key={index} />;
        })}
      </FormWrapper>
    </>
  );
};
