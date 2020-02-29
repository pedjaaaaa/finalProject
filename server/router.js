const express = require('express');
const router = express.Router();

//get request from the root route
router.get('/', (req, res) => {
    res.send('Server is running...');
});

module.exports = router;