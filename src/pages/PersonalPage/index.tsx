import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import FormWrapper from "../../components/Form/FormWrapper";
import {
  personalValidator,
  IPersonal,
} from "../../../../common/personal/validator";
import { defaultValues } from "../../../../common/personal/init";
import { personalSchema } from "../../../../common/personal/personalSchema";
import UserActions from "../../components/Form/UserAction";
import { FormButton } from "../../components/Form/FormButton";
import { personalEnum } from "../../../../common/enum";

export const PersonalPage: FC = () => {
  const methods = useForm<IPersonal>({
    resolver: zodResolver(personalValidator),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<IPersonal> = (values: IPersonal) => {
    console.log(values);
  };
  return (
    <>
      <FormWrapper methods={methods} onSubmitHandler={onSubmitHandler}>
        {personalSchema.map((action, index) => {
          return <UserActions action={action} key={index} />;
        })}
        <FormButton>Zapisz</FormButton>
      </FormWrapper>
    </>
  );
};
