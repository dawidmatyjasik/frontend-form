import * as Yup from "yup";
import { personalEnum } from "../enum";

export const personalValidator = Yup.object().shape({
  [personalEnum.lastName]: Yup.string().required("Pole wymagane"),
    [personalEnum.firstName]: Yup.string().required("Pole wymagane"),
    [personalEnum.pesel]: Yup.string().required("Pole wymagane"),
    [personalEnum.dateOfBirth]: Yup.string().required("Pole wymagane"),
    [personalEnum.placeOfBirth]: Yup.string().required("Pole wymagane"),
    [personalEnum.gender]: Yup.string().required("Pole wymagane"),
    [personalEnum.phoneNumber]: Yup.string().required("Pole wymagane"),
    [personalEnum.zipCode]: Yup.string().required("Pole wymagane"),
    [personalEnum.city]: Yup.string().required("Pole wymagane"),
    [personalEnum.street]: Yup.string().required("Pole wymagane"),
    [personalEnum.streetNumber]: Yup.string().required("Pole wymagane"),
    [personalEnum.blackList]: Yup.string().required("Pole wymagane"),
    [personalEnum.blackListReason]: Yup.string(),
    [personalEnum.assignedProject]: Yup.string().required("Pole wymagane"),
  });
