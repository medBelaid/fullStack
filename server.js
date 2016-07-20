var express =  require('express');
var app  = express();
var mongojs = require('mongojs');
var db = mongojs('jebouquine',['jebouquine']);
var bodyParser = require('body-parser');
var models = require('./model.js');

require('./fixture.js');
//app.get('/',function(req,res){
//   res.send("Hello word from srver.js");
//});
app.use(express.static(__dirname+"/"));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

var contoller = require('./controller');
app.get('/Livres', contoller.RecupererLivres);
app.get('/Livres/:categorie', contoller.RecupererLivresParCategorie);
app.get('/Livre/:Id', contoller.RecupererLivreParId);
app.get('/Categories', contoller.RecupererCategories);
app.post('/Categorie/Creer', contoller.CreerCategorie);
app.post('/Livre/Creer', contoller.CreerLivre);
app.post('/Livre/Editer', contoller.EditerLivre);
app.delete('/Livre/Delete/:Id', contoller.DeleteLivre);

app.get("/livrelist",function(req,res){
    db.livrelist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});
app.post("/livrelist",function(req,res){
    console.log(req.body);
    db.livrelist.insert(req.body, function(err, doc){
        res.json(doc);
    });
});

app.delete("/livrelist/:id",function(req,res){
    var id = req.params.id;
    db.livrelist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });
});

app.listen(8080);
//console.log("server running on port 3000");