import signInRoute from "./routes/users/signInRoute.js"
import signUpRoute from "./routes/users/signUpRoute.js"
import userRoutes from "./routes/users/userRoutes.js"
import enRoadsRoute from "./routes/enRoadsRoute.js"

const prepareRoutes = (ctx) => {
  userRoutes(ctx)
  signUpRoute(ctx)
  signInRoute(ctx)
  enRoadsRoute(ctx)
}

export default prepareRoutes
