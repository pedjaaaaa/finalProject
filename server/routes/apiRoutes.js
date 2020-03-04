const express = require('express');
const router = express.Router();
const Messages = require("../models/Messages");

router.get("/api/chat", (req, res) => {
  Messages.find({})
    .then(msg => {
      res.json(msg);
      console.log(res.json());
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;