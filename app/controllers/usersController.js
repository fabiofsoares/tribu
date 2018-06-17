'use strict';

//Content page
const data          = require('../locales/users.json'),
      mysql         = require('mysql'),
      config_db     = require('../database/config'),
      db            = mysql.createConnection(config_db);

/* //Page User | Dashboard
exports.index = function(req, res) {
    let sql = 'SELECT * from users where id=1',
        db = mysql.createConnection(config_db);
        
    db.connect();
    db.query(sql, function(err, rows, fields){
        if(err) throw err;

        console.log('Rows : ', rows )
        db.end();
        res.render('pages/user.html.twig', {
            data : data.user,
            user : rows[0]        
        });
    })
    
};
 */
//Page User | Dashboard
exports.index = function(req, res) {    
    if(req.session.email){
        let sql_teams = 'SELECT `name`, `firstname` , teams.district FROM `users` INNER JOIN teams ON users.fk_team = teams.id WHERE `fk_team` = (SELECT `fk_team` FROM `users` WHERE `email` = ?) AND `email` != ?',        
            values_teams = [req.session.email, req.session.email],
            user = {
                name : req.session.name,
                firstname : req.session.firstname,
                email : req.session.email
            },
            events = {},
            sql_events = 'SELECT events.id, events.title, events.status FROM events INNER JOIN users ON events.fk_teams = users.fk_team WHERE users.email = ?',        
            values_events = [req.session.email];             
             
        //db.connect();
        db.query(sql_events, values_events, function(err, rows, fields){
            if(err) throw err;
            events = rows;         
        })
        db.query(sql_teams, values_teams, function(err, rows, fields){
            if(err) throw err;
            console.log('RESULT : ', rows[0])            
            res.render('pages/user.html.twig', {
                data : data.user,
                user : user,
                team : rows[0].district,
                participants : rows,
                events: events
            });          
        })
    }else{
        res.redirect('/')
    }    
};

exports.event = function(req, res) {    
    if(req.session.email){
        let sql = 'SELECT * FROM events WHERE id = ?',        
            values = [req.params.id];
       
        db.query(sql, values, function(err, rows, fields){
            if(err) throw err;
            console.log('RESULT : ', rows[0])            
            res.render('pages/event.html.twig', {                
                event : rows[0]
            });          
        })
    }else{
        res.redirect('/')
    }    
};

/* con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  }); */