const express = require("express")
const app = express()

//rotas
const ghibli = require("./routes/ghibliRoute")

app.use("/filmesGhibli", ghibli)

module.exports = app