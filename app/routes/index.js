'use strict';
let express     = require('express'),
    router      = express.Router(),
    index       = require('../controllers/indexController');

//Routes
router.get('/', index.accueil )

router.get('/communaute', index.communaute )

router.get('/register-:step', index.register )

router.get('/login', index.login )

router.get('/logout', index.logout )

router.post('/inscription', index.inscription )

router.post('/inscription-2', index.inscription_step_2 )

router.post('/inscription-4', index.inscription_step_4 )

router.post('/connection', index.connectionUser )

router.post('/events', index.events ) 

module.exports = router;