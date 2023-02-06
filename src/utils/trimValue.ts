export const trimValue = (value) => {
  if (!value) {
    return value;
  }

  return typeof value === "string" ? value.trim() : value;
};

export const getTrimmedObject = (object) => {
  if (!object) {
    return object;
  }

  return Object.entries(object).reduce((acc, item) => {
    const [key, value] = item;
    if (typeof value === "string") {
      if (value.trim() === "") {
        acc[key] = undefined;
      } else {
        acc[key] = value.trim();
      }
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
};
