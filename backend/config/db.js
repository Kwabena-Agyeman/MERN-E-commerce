/** @format */

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongo DB connected : ${con.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
