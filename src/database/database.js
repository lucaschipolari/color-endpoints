import mongoose from "mongoose";

const { MONGODB } = process.env;

const connectDb = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(MONGODB)
    .then(() => {
      console.log("MongoDB Connected...");
    })
    .catch(() => {
      console.log("Failed to connect");
    });
};
