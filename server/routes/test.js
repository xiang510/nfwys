var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    code: 0,
    data: {
      testStr: 'Good morning Shawn!'
    }
  });
});

module.exports = router;
