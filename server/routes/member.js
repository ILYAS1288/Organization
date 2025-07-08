const express = require('express');
const router = express.Router();

// Example GET route

router.get('/', (req, res) => {
  res.json({ message: 'Member route is working!' });
});

module.exports = router; 