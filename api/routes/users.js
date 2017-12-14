const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({});
});

module.exports = router;
