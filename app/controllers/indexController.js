'use strict';

//Content page
const data          = require('../locales/index.json'),
      mysql         = require('mysql'),
      config_db     = require('../database/config'),
      db            = mysql.createConnection(config_db);

let   session;    

//Home page | Index
exports.accueil = function(req, res) {
    
    req.session.email ? session = true : session = false;
    let sql = 'SELECT * FROM events WHERE events.status = "open" ORDER BY events.date DESC';
    
    db.query(sql, function(err, rows, fields){
        if(err) throw err;
        res.render('pages/index.html.twig', {
            session : session,
            data : data.home,
            events : rows
        });
    })
};

//Page apropos
exports.apropos = function(req, res) {
    req.session.email ? session = true : session = false;
    res.render('pages/apropos.html.twig', {
        session : session,
        data : data.apropos
    });
};

//Page apropos
exports.register = function(req, res) {
    res.render('pages/register.html.twig', {
        data : data.inscription
    });
};

//Page apropos
exports.login = function(req, res) {
    res.render('pages/login.html.twig', {
        data : data.inscription
    });
};

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};
//Page apropos
exports.inscription = function(req, res) {
    //TODO : validation si l'email existe deja sur la BD

    let sql = 'INSERT INTO USERS (name, firstname, email, password, fk_team) VALUES (?, ?, ?, ?, ?)',
        values = [req.body.name, req.body.firstname, req.body.email, req.body.password, req.body.team];       
        
    //db.connect();
    db.query(sql, values, function(err, result){
        if(err) throw err;
        //db.end();
        
        req.session.email = req.body.email
        req.session.name = req.body.name
        req.session.firstname = req.body.firstname
        5 
        res.redirect('/users')
    })
    
};

exports.findUserByEmail = function(email) {
    let sql = 'SELECT * from users where email = ?',
        values = [email];       
        
    //db.connect();
    db.query(sql, values, function(err, result){
        if(err) throw err;
        //db.end();
        
        return result;
    })
    
};

exports.connectionUser = function(req, res) {
    let sql = 'SELECT * from users where email = ? AND password = ?',
        values = [req.body.email, req.body.password];         
        
    //db.connect();
    db.query(sql, values, function(err, result){
        if(err) throw err;
        //db.end();        
        req.session.email = result[0].email
        req.session.name = result[0].name
        req.session.firstname = result[0].firstname

        res.redirect('/users')
    })
    
};