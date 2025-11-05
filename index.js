const express = require("express")
const cors = require("cors")
const router = require("./src/routes/commerce.routes")
const dotenv = require("dotenv")

dotenv.config()

const server = express()

const connectDb = require("./src/config/conex")
connectDb()
server.use(cors())
server.use(express.json())
server.use("/api", router)

server.use((error, req, res, next) => {
    console.log(error.stack)
    res.status(500).json({ msg: error.message })
})

server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})