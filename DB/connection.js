import mongoose from "mongoose";

const connect = (URL) => {
    try {
        const connection = mongoose.connect(URL);
        console.log("Connected Database")
    } catch (error) {
        console.log(error)
    }
}

export {connect}