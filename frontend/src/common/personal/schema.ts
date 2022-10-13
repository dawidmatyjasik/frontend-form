import { FormTextField } from "../../components/Forms/FormTextField";
import { personalEnum } from "../enum";

export const personalSchema = [
    {
        name: personalEnum.firstName,
        label: 'Imię',
        Component: FormTextField,
        inputProps: {
            xs: 6
        }
    },
    {
        name: personalEnum.lastName,
        label: 'Nazwisko',
        Component: FormTextField,
        inputProps: {
            xs: 6
        }
    },
    {
        name: personalEnum.email,
        label: 'Email',
        Component: FormTextField,
        inputProps: {
            xs: 12
        }
    },
    {
        name: personalEnum.phone,
        label: 'Numer telefonu',
        Component: FormTextField,
        inputProps: {
            xs: 12
        }
    },

]