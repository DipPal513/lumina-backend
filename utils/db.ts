import mongoose from "mongoose";


const connectDatabase = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/lumina")
      .then(() => console.log("Database connected successfully..!"));
  } catch (error) {
    console.log("Database conection failed!", error);
  }
};
export default connectDatabase;