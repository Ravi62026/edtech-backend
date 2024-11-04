
const mongoose = require('mongoose');
require("dotenv").config()

const uri = process.env.MONGO_URL

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

exports.connectToDB = async () => {
    await mongoose.connect(uri, clientOptions)
    await mongoose.connection.db.admin().command({ping:1})
    .then(() => {
        console.log("Pinged your deployment. You successfully connected to MongoDB!")
    })
    .catch((err) => {
        console.error(err)
        console.log("Connection Issues with Database");
        process.exit(1);
    })
}