import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";
import { FC } from "react";
import FormInput from "../../components/HookForms/FormInput";
import FormWrapper from "../../components/HookForms/FormWrapper";
import { FormButton } from "../../components/HookForms/FormButton";

const loginSchema = object({
  fullName: string(),
  email: string().email("err"),
  age: string(),
  password: string().min(1, "err"),
  confirmPassword: string().min(1, "err"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

type ILogin = TypeOf<typeof loginSchema>;

export const TestPage: FC = () => {
  const defaultValues: ILogin = {
    fullName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  };

  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    console.log(values);
  };
  console.log("123");
  return (
    <>
      <FormWrapper methods={methods} onSubmitHandler={onSubmitHandler}>
        <FormInput label="Fullname" name="fullName" />
        <FormInput label="Email" type="email" name="email" />
        <FormInput label="Age" type="number" name="age" />
        <FormInput label="Password" type="password" name="password" />
        <FormInput
          label="Confirm password"
          type="password"
          name="confirmPassword"
        />
        <FormButton>Dodaj użytkownika</FormButton>
      </FormWrapper>
    </>
  );
};
