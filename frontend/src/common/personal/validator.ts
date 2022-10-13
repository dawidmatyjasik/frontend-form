import * as Yup from "yup";
import { personalEnum } from "../enum";

export const personalValidator = Yup.object().shape({
    [personalEnum.firstName]: Yup.string().required("Imię jest wymagane"),
    [personalEnum.lastName]: Yup.string().required("Nazwisko jest wymagane"),
    [personalEnum.email]: Yup.string().email("Błędny format").required("Email jest wymagany"),
    [personalEnum.phone]: Yup.number()
      .integer()
      .typeError("Podaj poprawny numer telefonu")
      .required("Numer telefonu jest wymagany"),
  });