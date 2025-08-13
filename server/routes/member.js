const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.json({ message: 'Member route is working!' });

}); 

// Get all members

router.get('/all', (req, res) => {
  const members = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' },
    { id: 5, name: 'Charlie Davis' }


  ];
  
  res.json(members);

});

router.post('/add', (req, res) => {
  const newMember = req.body;
  
  res.status(201).json({ message: 'Member added successfully', member: newMember });
});



module.exports = router; 