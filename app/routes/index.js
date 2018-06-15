'use strict';
let express     = require('express'),
    router      = express.Router(),
    index       = require('../controllers/indexController');

//Routes
router.get('/', index.accueil )

router.get('/apropos', index.apropos ) 

module.exports = router;