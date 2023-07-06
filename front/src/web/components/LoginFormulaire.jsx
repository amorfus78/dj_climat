import { Formik, Form } from "formik";
import * as yup from "yup";
import { emailValidator, passwordValidator } from "@/validator.js";
import FormField from "./FormField";
import { useCallback } from "react";
import useAppContext from "@/hooks/useAppContext";
import { useRouter } from "next/router";

const validationSchema = yup.object().shape({
  email: emailValidator.required("Email requis"),
  password: passwordValidator.required("Mot de passe requis"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginFormulaire = () => {
  const {
    actions: { signIn },
  } = useAppContext();
  const router = useRouter();

  const handleSubmit = useCallback(async (values) => {
    const { email, password } = values;
    const [error, data] = await signIn(email, password);

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
        <Form className="space-y-4 p-4">
          <FormField
            name="email"
            type="email"
            placeholder="Email..."
            label="Email"
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
            Se connecter
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormulaire;
