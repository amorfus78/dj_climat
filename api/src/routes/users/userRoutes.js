import UserModel from "../../db/models/UserModel.js"

const userRoutes = ({ app }) => {
  app.get("/user", async (req, res) => {
    const users = await UserModel.query()

    res.send({
      result: users,
    })
  })
}

export default userRoutes
