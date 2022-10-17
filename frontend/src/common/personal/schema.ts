import { FormSelect } from "../../components/Forms/FormSelect";
import { FormTextField } from "../../components/Forms/FormTextField";
import { personalEnum } from "../enum";
import { assignedProject, gender } from "../../data/data";
import { FormRadio } from "../../components/Forms/FormRadio";
import { FormSwitch } from "../../components/Forms/FormSwitch";
import { FormConditionalTextField } from "../../components/Forms/FormConditionalTextField";

export const personalSchema = [
    {
        name: personalEnum.lastName,
        label: 'Nazwisko',
        Component: FormTextField,
    },
    {
        name: personalEnum.firstName,
        label: 'Imię',
        Component: FormTextField,
    },
    {
        name: personalEnum.pesel,
        label: 'Pesel',
        Component: FormTextField,
    },
    {
        name: personalEnum.dateOfBirth,
        label: 'Data urodzenia',
        Component: FormTextField,
    },
    {
        name: personalEnum.placeOfBirth,
        label: 'Miejsce urodzenia',
        Component: FormTextField,
    },
    {
        name: personalEnum.gender,
        label: 'Płeć',
        Component: FormRadio,
        componentProps: {
            options: gender,
        },
    },
    {
        name: personalEnum.phoneNumber,
        label: 'Numer telefonu',
        Component: FormTextField,
    },
    {
        name: personalEnum.zipCode,
        label: 'Kod pocztowy',
        Component: FormTextField,
    },
    {
        name: personalEnum.city,
        label: 'Miasto',
        Component: FormTextField,
    },
    {
        name: personalEnum.street,
        label: 'Ulica',
        Component: FormTextField,
    },
    {
        name: personalEnum.streetNumber,
        label: 'Numer domu',
        Component: FormTextField,
    },
    {
        name: personalEnum.blackList,
        label: 'Czarna lista',
        Component: FormSwitch,
    }, 
    {
        name: personalEnum.blackListReason,
        label: 'Przyczyna wpisania na czarną listę',
        Component: FormConditionalTextField,
        componentProps: {
            referer: personalEnum.blackList,
        },
    }, 
       {
        name: personalEnum.assignedProject,
        label: 'Przypisz projekt',
        Component: FormSelect,
        componentProps: {
            options: assignedProject,
        },
    },


]