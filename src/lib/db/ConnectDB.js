import mongoose from "mongoose";

export async function ConnectDB() {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URL);
    console.info("Mongodb Connected");
  } catch (err) {
    console.log("err in connection", err);
  }
}
