const userRoutes = ({ app }) => {
  app.get("/user", async (req, res) => {
    res.send({
      result: "Hello World",
    })
  })
}

export default userRoutes
