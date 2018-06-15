'use strict';

//Content page
const data          = require('../locales/index.json'),
      mysql         = require('mysql'),
      config_db     = require('../database/config'),
      db            = mysql.createConnection(config_db);    

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

//Page apropos
exports.inscription = function(req, res) {
    res.render('pages/inscription.html.twig', {
        data : data.inscription
    });
};

//Page apropos
exports.sinscription = function(req, res) {
    let sql = 'INSERT INTO USERS (nom, prenom, email, password) VALUES (?, ?, ?)',
        values = [req.body.nom, req.body.prenom, req.body.email, req.body.password];       
        
    db.connect();
    db.query(sql, values, function(err, result){
        if(err) throw err;
        db.end();
        console.log('RESULT : ', result)
    })
    
};

exports.findUserByEmail = function(email) {
    let sql = 'SELECT * from users where email = ?',
        values = [email];       
        
    db.connect();
    db.query(sql, values, function(err, result){
        if(err) throw err;
        db.end();
        
        return result;
    })
    
};

exports.connectionUser = function(req, res) {
    let sql = 'SELECT * from users where email = ? AND password = ?',
        values = [req.body.email, req.body.password];         
        
    db.connect();
    db.query(sql, values, function(err, result){
        if(err) throw err;
        db.end();
        
        req.session.prenom = result[0].prenom
        req.session.nom = result[0].nom
        res.redirect('/users')
    })
    
};