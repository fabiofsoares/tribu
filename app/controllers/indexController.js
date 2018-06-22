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

//Page de la communaute
exports.communaute = function(req, res) {
    req.session.email ? session = true : session = false;
    res.render('pages/communaute.html.twig', {
        session : session,
        data : data.communaute
    });
};

//Page d'inscription - step 0
/*exports.register = function(req, res) {
    if(req.session.email){
        res.redirect('/');
    }
    else {
        res.render('pages/register/step-01.html.twig', {
            data : data.inscription.step1
        });
    }
    
};*/
exports.register  = function(req, res) {
      
    switch(req.params.step){
        case '1':
            if(req.session.email){
                res.redirect('/');
            }
            else {
                res.render('pages/register/step-01.html.twig', {
                    data : data.inscription.step1
                });
            }
            break;
        case '2':
            res.render('pages/register/step-02.html.twig', {
                data : data.inscription.step2,
                user_name : req.session.firstname
            });
            break;
        case '3':
            res.render('pages/register/step-03.html.twig', {
                data : data.inscription.step3
            });
            break;
        case '4':
            res.render('pages/register/step-04.html.twig', {
                data : data.inscription.step4
            });
            break;
        case '5':
            res.render('pages/register/step-05.html.twig', {
                data : data.inscription.step5,
                user_name : req.session.firstname
            });
            break;    
        default :
            res.redirect('/');
    }    
};
//Page apropos
exports.inscription_step_2 = function(req, res) {   
    let sql = "UPDATE users SET type_member = ? WHERE users.email = ?",
        values = [ req.body.type_member , req.session.email ]
    
    db.query(sql, values, function(err, rows, fields){
        if(err) throw err;
        res.redirect('/register-3');
    })
    
};
exports.inscription_step_3 = function(req, res) {
    res.redirect('/register-4');
};

exports.inscription_step_4 = function(req, res) {    let sql = "UPDATE users SET adress = ?, city = ?, fk_team = ? WHERE users.email = ?",
        values = [ req.body.adress, req.body.city, parseInt(req.body.team), req.session.email ]
    
    db.query(sql, values, function(err, rows, fields){
        if(err) throw err;
        console.log('updadate : ', rows)
        res.redirect('/register-5');
    })
    
};

exports.login = function(req, res) {
    res.render('pages/login.html.twig', {
        data : data.login
    });
};

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};
//Page apropos
exports.inscription = function(req, res) {
    //TODO : validation si l'email existe deja sur la BD

    let sql = 'INSERT INTO USERS (name, firstname, email, password) VALUES (?, ?, ?, ?)',
        values = [req.body.name, req.body.firstname, req.body.email, req.body.password];       
        
    //db.connect();
    db.query(sql, values, function(err, result){
        if(err) throw err;
        
        req.session.email = req.body.email
        req.session.name = req.body.name
        req.session.firstname = req.body.firstname
         
        res.redirect('/register-2')
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

exports.events = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};