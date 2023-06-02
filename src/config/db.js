require('dotenv').config()
const mongoose = require('mongoose')
    //connecter la  base de donnee
const { MONGO_URI } = process.env

const connectDb = async() => {
    try {
        await mongoose.connect(MONGO_URI, {

            useUnifiedTopology: true
        })
        console.log('DB conected successfully')
    } catch (error) {
        console.log(error)
    }
}
connectDb();