import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await connect("mongodb+srv://chethana:chethana123@userintervention.ptjlt.mongodb.net/?retryWrites=true&w=majority&appName=userIntervention");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
