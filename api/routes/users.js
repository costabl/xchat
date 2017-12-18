const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');

/* GET users listing. */
router.get('/', (req, res) => {
  userSchema.find({}, (err, result) => {
    if (err)
        res.send(err);

    res.json(result);
  });

});

module.exports = router;
