const express = require("express");
const db = require("../db/mongoose");
const router = express.Router();

// show the "new message" page
router.get("/", function (req, res, next) {
  res.render("new", {
    layout: "layouts/main",
    title: "Maxy Message Board",
    header: "Create a New Message",
  });
});

// accept form posts and redirect to "home" on success
router.post("/", async function (req, res, next) {
  try {
    await db.addMessage(req.body.text, req.body.user);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.render("new", {
      layout: "layouts/main",
      title: "Maxy Message Board",
      header: "Create a New Message",
    });
  }
});

module.exports = router;
