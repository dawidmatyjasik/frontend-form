import React from "react";
import { ComponentEnum } from "../../../../common/enum";
import FormInput from "../../components/Form/FormInput";
import FormInputDate from "../../components/Form/FormInputDate";
import FormInputRadio from "../../components/Form/FormInputRadio";
import FormInputSwitch from "../../components/Form/FormInputSwitch";
import FormInputSelect from "../../components/Form/FormInputSelect";
import FormInputMask from "../../components/Form/FormInputMask";

const UserActions = ({ action }: any) => {
  let props: any = {};

  switch (action.component) {
    case ComponentEnum.FormInput:
      return <FormInput {...action} {...props} />;
    case ComponentEnum.FormDatePicker:
      return <FormInputDate {...action} {...props} />;
    case ComponentEnum.FormRadio:
      return <FormInputRadio {...action} {...props} />;
    case ComponentEnum.FormSelect:
      return <FormInputSelect {...action} {...props} />;
    case ComponentEnum.FormSwitch:
      return <FormInputSwitch {...action} {...props} />;
    case ComponentEnum.FormInputMask:
      return <FormInputMask {...action} {...props} />;
    default:
      console.error("UserAction | component not found", { action });
      return null;
  }
};

export default UserActions;
