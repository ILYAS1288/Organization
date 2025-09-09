
const express = require('express');
const router = express.Router();


// Middleware to check if the user is authenticated
const authenticate = (req, res, next) => {

  next();
};
// Apply the authenticate middleware all routes in this file
router.use(authenticate);
// Routeser login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Dummy login
  if (username === 'admin@example.com' && password === '123456') 
    
    {
    return res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
  } else {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

});


 


module.exports = router;
