import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.MONGO_URI,
            {
                authSource: "admin",
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        const url = `${connection.connection.host}:
            ${connection.connection.host}`;
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
};

export default conectarDB;