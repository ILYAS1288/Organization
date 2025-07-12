const express = require('express');
const router = express.Router();
const Event = require('../models/Event');





// Get all events
router.get('/', async (req, res) => {

  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new event
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const newEvent = new Event({ title });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 