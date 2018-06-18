'use strict';
let express     = require('express'),
    router      = express.Router(),
    users       = require('../controllers/usersController');

//Route
router.get('/', users.index )

router.get('/event/:id', users.event )

router.get('/my-account', users.myAccount )

module.exports = router;