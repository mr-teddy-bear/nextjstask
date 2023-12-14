import * as yup from "yup";
import { emailReg } from "../regular/email";

export const emailValidation = yup
  .string()
  .email("invalid")
  .matches(emailReg, "invalid")
  .required("required");
