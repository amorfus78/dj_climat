import UserModel from "../../db/models/UserModel.js"
import validate from "../../middleware/validate.js"
import { emailValidator, stringValidator } from "../../validators.js"
import signJWTForUser from "../../../helpers/signJwtForUser.js"

const signInRoute = ({ app }) => {
  app.post(
    "/sign-in",
    validate({
      email: emailValidator.required(),
      password: stringValidator.required(),
    }),
    async (req, res) => {
      const { email, password } = req.locals.body

      const user = await UserModel.query().findOne({ email: email })

      if (!user || !user.checkPassword(password)) {
        res.status(401).send({ error: "E.INVALID.CREDENTIAL" })

        return
      }

      const jwt = signJWTForUser(user)
      res.send({ result: jwt })
    }
  )
}

export default signInRoute
