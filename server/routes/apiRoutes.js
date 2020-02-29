const express = require('express');
const router = express.Router();
const Messages = require("../models/Messages");

//get request from the root route
router.get('/', (req, res) => {
    res.send('Server is running...');
});

router.get("/api/chat", (req, res) => {
    console.log("api/chat");
  Messages.findall({})
    .then(msg => {
      res.json(msg);
      console.log(msg);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;