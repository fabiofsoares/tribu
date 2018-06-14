'use strict';

//Content page
const data = require('../locales/index.json')

//Home page | Index
exports.hello = function(req, res) {
    res.render('index.html.twig', {
        data : data.home
    });
};