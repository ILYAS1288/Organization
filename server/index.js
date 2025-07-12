const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());


const logger = require('./middleware/logger');
app.use(logger);


const memberRoutes = require('./routes/member');
const contactRoutes = require('./routes/contact');
const adminUserRoutes = require('./routes/adminUser');
const eventRoutes = require('./routes/event');

app.use('/api/member', memberRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin-users', adminUserRoutes);
app.use('/api/event', eventRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: ' Something went wrong!' });
});


const PORT = process.env.PORT || 3000;
const DBURL = process.env.DBURL;

if (!DBURL) {
  console.error(' Error: DBURL is missing in .env file');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(` Connected to MongoDB at ${DBURL}`);
  app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err.message);
});
