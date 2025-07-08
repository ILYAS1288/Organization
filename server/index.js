let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
require('dotenv').config();

require('dotenv').config();
let app = express();
app.use(cors());
app.use(express.json());
//Routes
const memberRoutes = require('./routes/member');
const contactRoutes = require('./routes/contact');
const validateContact = require('./middleware/validateContact');
const logger = require('./middleware/logger');
const adminUserRoutes = require('./routes/adminUser');

app.use(logger);

app.use('/api/member', memberRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin-users', adminUserRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

//Connect to MongoDB
mongoose.connect(process.env.DBURL).then(() => {
    console.log('Connected to MongoDB');
    console.log('//localhost:27017/yourdbname:', process.env.DBURL);
    console.log('3000:', process.env.PORT);
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running');
    })
}).catch((err) => {
    console.log(err)
})