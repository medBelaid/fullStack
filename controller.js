/**
 * Created by Mohamed on 17/07/2016.
 */
var models = require('./model');
exports.RecupererLivres = function (req, res) {
    console.log('RecupererLivres'   );
    models.Livre.find(function(err, livres) {
        if (err) {
            return console.error(err);         }
    res.json(livres);
    }); };
exports.RecupererLivreParId = function (req, res) {
    console.log('RecupererLivreParId');
    var options = {Id: req.params.Id};
    models.Livre.findOne(options,function(err, livre) {
        if (err) {
            return console.error(err);         }
        res.json(livre);     });
};
exports.EditerLivre = function (req, res) {
    console.log('Editer Livre');
    var options = {Id: req.body.Id};
    models.Livre.findOneAndUpdate(options,req.body, {upsert:true}, function(err, livre) {
        if (err) {
            return console.error(err);         }
        res.json(livre);
    });
};
exports.RecupererLivresParCategorie = function (req, res) {
    console.log('RecupererLivresParCategorie');
    var options = {Categorie: req.params.categorie};
    models.Livre.find(options,function(err, livres) {
        if (err) {
            return console.error(err);
        }
    res.json(livres);
    });
};
exports.RecupererCategories = function (req, res) {
    console.log('RecupererCategories');
    models.Categorie.find(function(err, categories) {
        if (err) {
            return console.error(err);
        }
        res.json(categories);
    });
};
exports.CreerCategorie = function (req, res) {
    console.log('CreerCategorie',req.body);
    models.Categorie(req.body).save();
    res.json(req.body);
};
exports.CreerLivre = function (req, res) {
    console.log(req.body);
    models.Livre(req.body).save();
    res.json(req.body);
};
exports.DeleteLivre = function (req, res) {
    var options = {Id: req.params.Id};
    models.Livre.find().remove(options).exec();

};
