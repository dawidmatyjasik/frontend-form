import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import FormInput from "../../components/Form/FormInput";
import FormWrapper from "../../components/Form/FormWrapper";
import { FormButton } from "../../components/Form/FormButton";
import FormInputDate from "../../components/Form/FormInputDate";
import FormInputRadio from "../../components/Form/FormInputRadio";
import FormInputSwitch from "../../components/Form/FormInputSwitch";
import FormInputSelect from "../../components/Form/FormInputSelect";
import FormInputMask from "../../components/Form/FormInputMask";
import { gender, assignedProject } from "../../data/data";
import {
  personalValidator,
  ILogin,
} from "../../../../common/personal/validator";
import { defaultValues } from "../../../../common/personal/init";
import { personalSchema } from "../../../../common/personal/personalSchema";
import { personalEnum } from "../../../../common/enum";

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
        <FormInput label="Fullname" name="fullName" props={{ xs: 12, sm: 6 }} />
        <FormInput
          label="Email"
          type="email"
          name="email"
          props={{ xs: 12, sm: 6 }}
        />
        <FormInput label="Age" type="number" name="age" />
        <FormInput label="Password" type="password" name="password" />
        <FormInput
          label="Confirm password"
          type="password"
          name="confirmPassword"
        />
        <FormInputDate name="date" label="Date" />
        <FormInputRadio name="gender" label="Gender" options={gender} />
        <FormInputSwitch name="blackList" label="Black list" />
        <FormInputSelect
          name="select"
          label="Select"
          options={assignedProject}
        />
        <FormInputMask name="mask" label="Mask" mask="999 999" />
        <FormButton>Dodaj użytkownika</FormButton>
      </FormWrapper>
    </>
  );
};
