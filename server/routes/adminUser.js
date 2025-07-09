// routes/member.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Member route' });
});

module.exports = router;
