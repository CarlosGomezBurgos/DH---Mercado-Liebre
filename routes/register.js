let express = require ('express');
let router = express.Router();
const path = require ('path');
const registerController = require('../controllers/registerController');


router.get('/', registerController.index);

module.exports = router;