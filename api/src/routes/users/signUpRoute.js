import validate from "../../middleware/validate.js"
import {
  emailValidator,
  numberValidator,
  passwordValidator,
} from "../../validators.js"
import hashPassword from "../../db/methods/hashPassword.js"
import UserModel from "../../db/models/UserModel.js"

const signUpRoute = ({ app }) => {
  app.post(
    "/user",
    validate({
      body: {
        email: emailValidator.required(),
        password: passwordValidator.required(),
        age: numberValidator.required(),
      },
    }),
    async (req, res) => {
      const { email, password, age } = req.locals.body

      const user = await UserModel.query().findOne({ email: email })

      if (user) {
        res.status(201).send({ result: "OK" })

        return
      }

      const [passwordHash, passwordSalt] = await hashPassword(password)

      const newUser = await UserModel.query().insertAndFetch({
        email: email,
        age: age,
        password_hash: passwordHash,
        password_salt: passwordSalt,
      })

      res.status(201).send({ result: "OK" })
    }
  )
}

export default signUpRoute
