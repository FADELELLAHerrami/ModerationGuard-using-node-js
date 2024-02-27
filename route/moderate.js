const express = require('express');

router = express.Router();

const controllerModerate = require('../controller/moderate');



// for cors error
router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//
router.get('/',controllerModerate.showModerate);
router.post('/',controllerModerate.createModerate);

module.exports = router;
