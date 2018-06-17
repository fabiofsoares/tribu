'use strict';
let express     = require('express'),
    router      = express.Router(),
    index       = require('../controllers/indexController');

//Routes
router.get('/', index.accueil )

router.get('/apropos', index.apropos )

router.get('/register', index.register )

router.get('/login', index.login )

router.get('/logout', index.logout )

router.post('/inscription', index.inscription )

router.post('/connection', index.connectionUser ) 

module.exports = router;