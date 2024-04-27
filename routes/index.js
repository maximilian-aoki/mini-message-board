const express = require("express");
const db = require("../db/mongoose");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const messageArr = await db.getMessages();

  res.render("index", {
    layout: "layouts/main",
    title: "Maxy Message Board",
    header: "All Messages",
    messages: messageArr,
  });
});

module.exports = router;
