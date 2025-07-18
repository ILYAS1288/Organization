const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.json({ message: 'Member route is working!' });
}); 

router.post('/add', (req, res) => {
  const newMember = req.body;
  
  res.status(201).json({ message: 'Member added successfully', member: newMember });
});



module.exports = router; 