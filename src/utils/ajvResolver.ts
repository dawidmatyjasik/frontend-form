import Ajv from "ajv";
import addFormats from "ajv-formats";

import { getTrimmedObject } from "./trimValue";

const ajv = new Ajv({
  removeAdditional: "all",
  messages: false,
  $data: true,
  allErrors: true,
  jsPropertySyntax: true,
});

addFormats(ajv);

const parseErrors = (arr) =>
  arr.reduce((o, el) => {
    const { keyword, params, instancePath } = el;
    const path =
      (el.params && el.params.missingProperty) || instancePath.substr(1);
    if (!o[path]) {
      o[path] = { keyword, params };
    }
    return o;
  }, {});

export const ajvResolver = (items, context) => {
  const values = getTrimmedObject(items);
  const validate = ajv.compile(context);
  const valid = validate(values);
  if (valid) {
    return {
      values,
      errors: {},
    };
  }

  return {
    values: {},
    errors: parseErrors(validate.errors),
  };
};
