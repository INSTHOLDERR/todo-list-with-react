import mongoose from "mongoose"

export default function connection(){
    return mongoose.connect(process.env.DB_URI)
}