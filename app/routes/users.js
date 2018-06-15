'use strict';
let express     = require('express'),
    router      = express.Router(),
    users       = require('../controllers/usersController');

//Route
router.get('/', users.index )

module.exports = router;