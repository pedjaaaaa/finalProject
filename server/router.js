const express = require('express');
const router = express.Router();

//get request from the root route
router.get('/', (req, res) => {
    res.send('Server is running...');
});

router.get('/api/chat', (req, res) => {
    res.json();
})

module.exports = router;