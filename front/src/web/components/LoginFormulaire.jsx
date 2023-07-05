import {Formik, Form} from "formik"
import * as yup from "yup"
import { emailValidator, passwordValidator } from "@/validator.js"

const defaultValidationSchema = yup.object().shape({
    email: emailValidator.required("Email requis"),
    password: passwordValidator.required("Mot de passe requis"),
  })
  
  const defaultInitialValues = {
    email: "",
    password: "",
  }

const LoginFormulaire = (props) => {
    const {
        onSubmit,
        initialValues = defaultInitialValues,
        validationSchema = defaultValidationSchema,
      } = props
    
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-4 p-4">
        <div className="flex flex-col">
            <input
              name="email"
              type="email"
              placeholder="Email..."
              label = "Email"
              className="p-2 border rounded w-full focus:outline-none focus:border-green-500 text-green-500"
            />
          </div>

          <div className="flex flex-col">
            <input
              name="password"
              type="password"
              label = "Mot de passe"
              placeholder="Mot de passe"
              className="p-2 border rounded w-full focus:outline-none focus:border-green-500 text-green-500"
            />
          </div>
            <button className="flex flex-col items-center mt-8 bg-green-500 text-green-300 rounded py-2 px-4 text-2xl font-semibold w-full text-center" type="submit">
              Se connecter
            </button>
        </Form>
      </Formik>
    );
}

export default LoginFormulaire