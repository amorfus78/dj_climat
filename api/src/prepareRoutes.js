import userRoutes from "./routes/users/userRoutes.js"

const prepareRoutes = (ctx) => {
  userRoutes(ctx)
}

export default prepareRoutes
