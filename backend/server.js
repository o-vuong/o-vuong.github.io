const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// MongoDB connection
const uri = 'mongodb+srv://ovuong:96UjN8eRRfgxtGJb@personal-site.fedm1.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
