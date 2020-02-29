const router = require("express").Router();
const Messages = require("../models/Messages");

router.get("/api/chat", (req, res) => {
  Messages.find({})
    .then(msg => {
      res.json(msg);
      console.log(msg);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;