import mongoose from "mongoose";

export async function connect() {
  try {
    // we don't if the url is gonna resolve
    // but here it will so we use ! to make sure that we are taking care of it
    mongoose.connect(process.env.MONGO_URL!);
    // grab connection, once moongose is connected, and string will be available
    // and we can listen to variety of event
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error, Please make sure MongoDB is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
