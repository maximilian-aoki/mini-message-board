require("dotenv").config();

const mongoose = require("mongoose");
const Message = require("./models/message");

mongoose.connection.on("connected", () => console.log("connected to MongoDB"));
mongoose.connection.on("error", () => console.log("error in MongoDB"));
mongoose.connection.on("disconnected", () =>
  console.log("disconnected from MongoDB")
);

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

async function addMessage(text, user) {
  try {
    await Message.create({ text, user });
  } catch (err) {
    console.error(err);
  }
}

async function getMessages() {
  try {
    const messageArr = await Message.find().sort({ added: -1 }).exec();
    return messageArr;
  } catch (err) {
    console.error(err);
  }
}

async function deleteMessage(id) {
  try {
    await Message.deleteOne({});
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  connectDB,
  disconnectDB,
  addMessage,
  getMessages,
  deleteMessage,
};
