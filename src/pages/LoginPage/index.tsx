import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { loginEnum } from "../../../../common/enum";
import FormInput from "../../components/Form/FormInput";
import { Grid } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Wszelkie prawa zastrzeżone © "}
      <Link color="inherit" href="">
        Łętowski Consulting
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Logowanie
            </Typography>
            <Grid container spacing={2}>
              <FormInput name="email" type="email" label="Adres email" />
              <FormInput name="password" type="password" label="Hasło" />
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Zapamiętaj mnie"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zaloguj się
            </Button>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </form>
    </FormProvider>
  );
};
