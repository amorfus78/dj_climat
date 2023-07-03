import jsonwebtoken from "jsonwebtoken"
import config from "../src/config.js"

const signJWTForUser = (user) =>
  jsonwebtoken.sign(
    {
      payload: {
        user: {
          id: user.id,
        },
      },
    },
    config.security.jwt.secret,
    { expiresIn: config.security.jwt.expiresIn }
  )

export default signJWTForUser
