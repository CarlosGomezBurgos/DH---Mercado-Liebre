let express = require('express');
let router = express.Router();
const path = require('path');
const loginController = require('../controllers/loginController');

router.get('/', loginController.index);

module.exports = router;
