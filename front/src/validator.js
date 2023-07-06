import * as yup from "yup";

export const stringValidator = yup.string();

export const emailValidator = yup
  .string()
  .email("something is wrong with your email address")
  .label("email");

export const passwordValidator = yup
  .string()
  .min(8, "Must Contain at least 8 characters")
  .matches(/[a-z]/, "Must contain at least one lowercase character")
  .matches(/[A-Z]/, "Must contain at least one uppercase character")
  .matches(/\d/, "Must contain at least one number")
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Must contain at least one special character"
  )
  .label("Password");

export const ageValidator = yup.number().integer().positive().label("Age");
