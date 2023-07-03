import signUpRoute from "./routes/users/signUpRoute.js"
import userRoutes from "./routes/users/userRoutes.js"

const prepareRoutes = (ctx) => {
  userRoutes(ctx)
  signUpRoute(ctx)
}

export default prepareRoutes
