import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let mongodbURI = process.env.MONGODB_URI;
    const projectName = "resume-builder";

    if (!mongodbURI) {
      throw new Error("MONGODB_URI environment variable not set");
    }

    if (mongodbURI.endsWith("/")) {
      mongodbURI = mongodbURI.slice(0, -1);
    }

    // Modern connection — no deprecated options
    await mongoose.connect(`${mongodbURI}/${projectName}`);

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
