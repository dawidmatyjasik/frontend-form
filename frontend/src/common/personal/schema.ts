import { FormSelect } from "../../components/Forms/FormSelect";
import { FormTextField } from "../../components/Forms/FormTextField";
import { personalEnum } from "../enum";
import countries from "../../data/countries.json";
import { assignedProject } from "../../data/data";
import { FormCheckbox } from "../../components/Forms/FormCheckbox";
import { FormRadio } from "../../components/Forms/FormRadio";

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
        Component: FormTextField,
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