'use strict';

//Content page
const data      = require('../locales/users.json'),
      mysql     = require('mysql'),
      config_db    = require('../database/config');

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
    
    if(req.session.prenom){
        let user = {
            prenom : req.session.prenom,
            nom : req.session.nom
        }
        res.render('pages/user.html.twig', {
            data : data.user,
            user : user       
        });
        
    }else{
        res.redirect('/')
    }
   
    
};


/* con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  }); */