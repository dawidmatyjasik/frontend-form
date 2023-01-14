import { ComponentEnum } from "../../../../common/enum";
import FormInput from "../../components/Form/FormInput";
import FormInputDate from "../../components/Form/FormInputDate";
import FormInputRadio from "../../components/Form/FormInputRadio";
import FormInputSwitch from "../../components/Form/FormInputSwitch";
import FormInputSelect from "../../components/Form/FormInputSelect";
import FormInputMask from "../../components/Form/FormInputMask";
import FormHeader from "./FormHeader";
import FormSubHeader from "./FormSubHeader";

const UserActions = ({ action, referer }: any) => {
  const { component, ...rest } = action;
  let props: any = {};

  if (!!referer) {
    return null;
  }

  switch (component) {
    case ComponentEnum.FormInput: {
      return <FormInput {...rest} {...props} />;
    }
    case ComponentEnum.FormDatePicker: {
      return <FormInputDate {...rest} {...props} />;
    }
    case ComponentEnum.FormRadio: {
      return <FormInputRadio {...rest} {...props} />;
    }
    case ComponentEnum.FormSelect: {
      return <FormInputSelect {...rest} {...props} />;
    }
    case ComponentEnum.FormSwitch: {
      return <FormInputSwitch {...rest} {...props} />;
    }
    case ComponentEnum.FormInputMask: {
      return <FormInputMask {...rest} {...props} />;
    }
    case ComponentEnum.FormHeader: {
      return <FormHeader {...rest} {...props} />;
    }
    case ComponentEnum.FormSubHeader: {
      return <FormSubHeader {...rest} {...props} />;
    }
    default: {
      console.error("UserAction | component not found", { action });
      return null;
    }
  }
};

export default UserActions;
