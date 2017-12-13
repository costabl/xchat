const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  console.log(req);
  console.log(res);  
  res.json({});
});

module.exports = router;
