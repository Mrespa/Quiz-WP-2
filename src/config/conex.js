// Conexión con la DB
const mongoose = require("mongoose")
const connectDb = async () => {
    try {
        const uri = "mongodb+srv://Igna_DB:KNchEHnOmXrfmkIQ@cluster0.itkfgb6.mongodb.net/Quiz_2_WP_2?appName=Cluster0"
        const db = await mongoose.connect(uri)
        const { name, host } = db.connection
        console.log(`Base de datos: ${name}, servidor ${host}`)

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb