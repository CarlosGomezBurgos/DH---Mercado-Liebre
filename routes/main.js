let express = require('express');
let mainController = require('../controllers/mainController.js');

let router = express.Router();
const path = require('path');


router.get('/', mainController.index);
router.get('/list', mainController.list);

module.exports = router;