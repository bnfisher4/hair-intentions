const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers');


/* GET users listing. */

router.get('/users', indexCtrl.index);



module.exports = router;
