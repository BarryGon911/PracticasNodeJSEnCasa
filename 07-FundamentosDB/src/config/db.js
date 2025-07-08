import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}/${connection.name}`;
        console.log(colors.bgBlue.cyan.bold(`MongoDB connected successfully on ${url}`));
        return "Ok"
    }
    catch (error) {
        console.error(colors.bgRed.bold.white.bold(error.message));
        process.exit(1);// Exit the process with Failure
    }
}
