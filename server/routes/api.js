const express = require('express');
const router = express.Router();

app.use('/pokemon', require('./routes/pokemon'));


module.exports = router;
