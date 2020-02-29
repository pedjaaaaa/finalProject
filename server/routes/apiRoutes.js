const router = require("express").Router();
const Messages = require("../models/Messages");

router.post("/api/chat", ({ body }, res) => {
  Messages.create(body)
    .then(msg => {
      res.json(msg);
      console.log(msg);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});