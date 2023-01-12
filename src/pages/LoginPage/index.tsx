import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { loginEnum } from "../../../../common/enum";
import FormInput from "../../components/Form/FormInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

interface ILogin {
  email: string;
  password: string;
}

const defaultValues = {
  [loginEnum.email]: "",
  [loginEnum.password]: "",
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const methods = useForm<ILogin>({
    defaultValues,
  });

  const handleSubmit: SubmitHandler<ILogin> = async (credentials: ILogin) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col h-full w-full p-2">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="h-full w-full"
        >
          <main className="h-full max-w-md mx-auto px-4">
            <div className="flex flex-col justify-center items-center h-full space-y-6">
              <h1 className="text-4xl">Logowanie</h1>
              <div className="w-full space-y-4">
                <FormInput name="email" type="email" label="Adres email" />
                <FormInput name="password" type="password" label="Hasło" />
              </div>

              <Button
                type="submit"
                sx={{
                  width: "50%",
                  minWidth: "160px",
                }}
                variant="contained"
              >
                Zaloguj się
              </Button>
            </div>
          </main>
        </form>
        <footer>
          <h3 className="text-[rgba(0,0,0,.5)] text-sm text-center">
            Wszelkie prawa zastrzeżone ©
          </h3>
        </footer>
      </FormProvider>
    </div>
  );
};
