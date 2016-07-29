var express =  require('express');
var app  = express();
var mongojs = require('mongojs');
var db = mongojs('jebouquine',['jebouquine']);
var bodyParser = require('body-parser');
var models = require('./model.js');
var session = require('express-session');

require('./fixture.js');
//app.get('/',function(req,res){
//   res.send("Hello word from srver.js");
//});
app.use(express.static(__dirname+"/"));
app.use(bodyParser.json());
app.use(session({secret:"pdfdfjhyhdsckjgrtsvv",resave:false, saveUninitialized:true}));
//app.use(bodyParser.urlencoded({ extended: true }));

var contoller = require('./controller');
app.get('/Livres', contoller.RecupererLivres);
app.get('/Livres/:categorie', contoller.RecupererLivresParCategorie);
app.get('/Livre/:Id', contoller.RecupererLivreParId);
app.get('/Categories', contoller.RecupererCategories);
app.post('/Categorie/Creer', contoller.CreerCategorie);
app.post('/Livre/Creer', contoller.CreerLivre);
app.post('/Livre/Editer', contoller.EditerLivre);
app.post('/Categorie/Editer', contoller.EditerCategorie);
app.delete('/Livre/Delete/:Id', contoller.DeleteLivre);
app.delete('/Categorie/Delete/:Id', contoller.DeleteCategorie);
app.get('/Comptes', contoller.RecupererComptes);
app.post('/Compte/Creer', contoller.CreerCompte);
app.post('/Login', contoller.Login);
app.post('/Logout', contoller.Logout);
app.get('/IsConnected', contoller.IsConnected);

app.listen(8080);
//console.log("server running on port 3000");