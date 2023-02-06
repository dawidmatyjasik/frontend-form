import { ajvResolver } from "../utils/ajvResolver";

export const useValidator: any = ({ validator }) => {
  return {
    context: validator,
    resolver: ajvResolver,
  };
};
