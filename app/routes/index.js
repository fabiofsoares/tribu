'use strict';
let express     = require('express'),
    router      = express.Router(),
    index       = require('../controllers/indexController');

//Routes
router.get('/', index.accueil )

router.get('/apropos', index.apropos )

router.get('/inscription', index.form_inscription )

router.post('/inscription', index.inscription )

router.post('/connection', index.connectionUser ) 

module.exports = router;