import mongoose from "mongoose";

export class MongoDbConnection {
  async connectDb() {
    await mongoose
      .connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to MongoDb"))
      .catch((err) => console.log("Error: " + err));
  }
}
