import validate from "../../middleware/validate.js"
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneNumberValidator,
} from "../../validators.js"
import hashPassword from "../../db/methods/hashPassword.js"
import UserModel from "../../db/models/UserModel.js"

const signUpRoute = ({ app }) => {
  app.post(
    "/user",
    validate({
      body: {
        display_name: nameValidator.required(),
        email: emailValidator.required(),
        password: passwordValidator.required(),
        phone_number: phoneNumberValidator.required(),
      },
    }),
    async (req, res) => {
      console.log("hello")
      const { email, password, display_name, phone_number } = req.locals.body

      const user = await UserModel.query().findOne({ email: email })

      if (user) {
        res.status(201).send({ result: "OK" })

        return
      }

      const [passwordHash, passwordSalt] = await hashPassword(password)

      const newUser = await UserModel.query().insertAndFetch({
        display_name: display_name ? display_name : null,
        email: email,
        phone_number: phone_number,
        password_hash: passwordHash,
        password_salt: passwordSalt,
      })

      res.status(201).send({ result: "OK" })
    }
  )
}

export default signUpRoute
