'use strict';
let express     = require('express'),
    router      = express.Router(),
    users       = require('../controllers/usersController');

//Route
router.get('/', users.hello )

module.exports = router;