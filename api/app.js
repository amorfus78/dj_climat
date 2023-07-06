import createError from "http-errors"
import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import { fileURLToPath } from "url"
import logger from "morgan"
import prepareRoutes from "./src/prepareRoutes.js"
import config from "./src/config.js"
import knex from "knex"
import BaseModel from "./src/db/models/BaseModel.js"
import cors from "cors"

var app = express()

// view engine setup
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(cors())

const db = knex(config.db)

BaseModel.knex(db)

prepareRoutes({ app })
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

export default app
