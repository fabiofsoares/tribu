'use strict';

//Content page
const data = require('../locales/users.json')

//Page User | Dashboard
exports.hello = function(req, res) {
    res.render('index.html.twig', {
        data : data.home
    });
};