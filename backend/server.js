const express = require('express');
const mongoose = require('mongoose');

const app = express();
const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');

const app = express();

app.use(express.json()); // To parse JSON body in POST requests
app.use('/contact', contactRoutes);

// Replace <password> with your database user's password
const uri = 'mongodb+srv://ovuong:96UjN8eRRfgxtGJb@personal-site.fedm1.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Failed to connect to MongoDB', err);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
