require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
  } catch (err) {
    console.error(err);
  }
}

async function disconnectDB() {
  await mongoose.connection.close();
}

mongoose.connection.on("connected", () => console.log("connected to MongoDB"));
mongoose.connection.on("error", () => console.log("error in MongoDB"));
mongoose.connection.on("disconnected", () =>
  console.log("disconnected from MongoDB")
);

module.exports = {
  connectDB,
  disconnectDB,
};
