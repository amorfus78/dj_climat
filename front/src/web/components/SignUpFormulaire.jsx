import { Formik, Form } from "formik";
import * as yup from "yup";
import {
  ageValidator,
  emailValidator,
  passwordValidator,
} from "@/validator.js";
import { useCallback } from "react";
import FormField from "./FormField";
import useAppContext from "@/hooks/useAppContext";
import { useRouter } from "next/router";

const validationSchema = yup.object().shape({
  email: emailValidator.required("Email requis"),
  password: passwordValidator.required("Mot de passe requis"),
  age: ageValidator.required("Age requis"),
});

const initialValues = {
  email: "",
  password: "",
  age: "",
};

const SignUpFormulaire = () => {
  const {
    actions: { signUp },
  } = useAppContext();
  const router = useRouter();

  const handleSubmit = useCallback(async (values) => {
    const { email, password, age } = values;
    const [error, data] = await signUp(email, password, age);

    if (!error) {
      router.back();
    }
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="flex flex-col items-center gap-4 p-4">
          <FormField
            name="email"
            type="email"
            placeholder="Email..."
            label="Email"
            className="p-2 border rounded w-full focus:outline-none focus:border-green-500 text-green-500"
          />
          <FormField
            name="age"
            type="number"
            placeholder="12"
            label="Age"
            className="p-2 border rounded w-full focus:outline-none focus:border-green-500 text-green-500"
          />
          <FormField
            name="password"
            type="password"
            label="Mot de passe"
            placeholder="Mot de passe"
            className="p-2 border rounded w-full focus:outline-none focus:border-green-500 text-green-500"
          />
          <button
            disabled={isSubmitting || !isValid}
            className="flex flex-col items-center mt-8 bg-green-500 text-green-300 rounded py-2 px-4 text-2xl font-semibold w-full text-center"
            type="submit"
          >
            S'inscrire
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpFormulaire;
