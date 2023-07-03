import userRoutes from "./routes/userRoutes.js"

const prepareRoutes = (ctx) => {
  userRoutes(ctx)
}

export default prepareRoutes
