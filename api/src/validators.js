import yup from "yup"

export const emailValidator = yup
  .string()
  .email("E.INVALID.email")
  .label("E-mail")

export const nameValidator = yup
  .string()
  .matches(/^[\p{L} -]+$/u, "E.INVALID.display_name")
  .label("Name")

export const passwordValidator = yup
  .string()
  .min(8)
  .matches(
    /^(?=.*[\p{Ll}])(?=.*[\p{Lu}])(?=.*[0-9])(?=.*[^0-9\p{Lu}\p{Ll}]).*$/gu,
    "E.INVALID.password"
  )
  .label("Password")

export const phoneNumberValidator = yup
  .string()
  .matches(/[+](?:[0-9]●?){6,14}[0-9]/, "E.INVALID.phone")

export const stringValidator = yup.string()
