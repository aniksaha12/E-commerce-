import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL =`mongodb+srv://${username}:${password}@cluster0.d0sswi3.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connect succesfully');
    } catch(error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;