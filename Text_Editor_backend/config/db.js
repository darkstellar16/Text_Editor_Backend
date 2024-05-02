const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')


mongoose.connect(process.env.mongourl).then(() => {
    console.log("Database Connected :)")
}).catch((err) => {
    console.log("this is error :(", err)
})