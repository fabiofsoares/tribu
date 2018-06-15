'use strict';

//Content page
const data = require('../locales/index.json')

//Home page | Index
exports.accueil = function(req, res) {
    res.render('pages/index.html.twig', {
        data : data.home
    });
};

//Page apropos
exports.apropos = function(req, res) {
    res.render('pages/apropos.html.twig', {
        data : data.apropos
    });
};