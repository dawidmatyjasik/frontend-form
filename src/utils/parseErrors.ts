import { errorsEnum } from "../../../common/enum";

export const parseErrors = ({ errors, name }) => {
  if (errors[name]) {
    return errorsEnum[errors[name]?.keyword];
  }
  return "";
};
