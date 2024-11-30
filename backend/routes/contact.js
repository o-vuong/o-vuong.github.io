const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).send('Contact form submission received and saved to database');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
