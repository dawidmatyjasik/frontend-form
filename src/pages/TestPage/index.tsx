import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { date, object, string, TypeOf, number } from "zod";
import { FC } from "react";
import FormInput from "../../components/HookForms/FormInput";
import FormWrapper from "../../components/HookForms/FormWrapper";
import { FormButton } from "../../components/HookForms/FormButton";
import FormInputDate from "../../components/HookForms/FormInputDate";
import FormInputRadio from "../../components/HookForms/FormInputRadio";

const loginSchema = object({
  // fullName: string(),
  // email: string().email("err"),
  // age: string(),
  // password: string().min(1, "err"),
  // confirmPassword: string().min(1, "err"),
  // date: date(),
  gender: number().nullable(),
});
// .refine((data) => data.password === data.confirmPassword, {
//   path: ["passwordConfirm"],
//   message: "Passwords do not match",
// });

const gender = ["Mężczyzna", "Kobieta"];

type ILogin = TypeOf<typeof loginSchema>;

export const TestPage: FC = () => {
  const defaultValues: ILogin = {
    // fullName: "",
    // email: "",
    // age: "",
    // password: "",
    // confirmPassword: "",
    // date: new Date(),
    gender: 1,
  };
  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
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
        <FormButton>Dodaj użytkownika</FormButton>
      </FormWrapper>
    </>
  );
};
