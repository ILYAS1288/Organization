const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// === MIDDLEWARES ===
app.use(cors());
app.use(express.json());

// === CUSTOM MIDDLEWARE ===
const logger = require('./middleware/logger');
app.use(logger);

// === ROUTES ===
const memberRoutes = require('./routes/member');
const contactRoutes = require('./routes/contact');
const adminUserRoutes = require('./routes/adminUser');

app.use('/api/member', memberRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin-users', adminUserRoutes);

// === ROOT ROUTE (Health check) ===
app.get('/', (req, res) => {
  res.send('API is running...');
});

// === GLOBAL ERROR HANDLER ===
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: ' Something went wrong!' });
});

// === CONNECT TO MONGODB AND START SERVER ===
const PORT = process.env.PORT || 3000;
const DBURL = process.env.DBURL;

if (!DBURL) {
  console.error(' Error: DBURL is missing in .env file');
  process.exit(1);
}

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
