const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 50 },
  user: { type: String, required: true, maxLength: 15 },
  added: { type: Date, default: () => Date.now() },
});

module.exports = mongoose.model("Message", messageSchema);
