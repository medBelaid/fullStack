/**
 * Created by Mohamed on 17/07/2016.
 */
var models = require('./model');
exports.RecupererLivres = function (req, res) {
    models.Livre.find(function(err, livres) {
        if (err) {
            return console.error(err);         }
    res.json(livres);
    }); };
exports.RecupererLivreParId = function (req, res) {
    var options = {Id: req.params.Id};
    models.Livre.findOne(options,function(err, livre) {
        if (err) {
            return console.error(err);         }
        res.json(livre);     });
};
exports.EditerLivre = function (req, res) {
    var options = {Id: req.body.Id};
    models.Livre.findOneAndUpdate(options,req.body, {upsert:true}, function(err, livre) {
        if (err) {
            return console.error(err);         }
        res.json(livre);
    });
};
exports.EditerCategorie = function (req, res) {
    var options = {Id: req.body.Id};
    models.Categorie.findOneAndUpdate(options,req.body, {upsert:true}, function(err, categorie) {
        if (err) {
            return console.error(err);         }
        res.json(categorie);
    });
};
exports.RecupererLivresParCategorie = function (req, res) {
    var options = {Categorie: req.params.categorie};
    models.Livre.find(options,function(err, livres) {
        if (err) {
            return console.error(err);
        }
    res.json(livres);
    });
};
exports.RecupererCategories = function (req, res) {
    models.Categorie.find(function(err, categories) {
        if (err) {
            return console.error(err);
        }
        res.json(categories);
    });
};
exports.CreerCategorie = function (req, res) {
    models.Categorie(req.body).save();
    res.json(req.body);
};
exports.CreerCategorie = function (req, res) {
    models.Categorie(req.body).save();
    res.json(req.body);
};
exports.CreerLivre= function (req, res) {
    models.Livre(req.body).save();
    res.json(req.body);
};
exports.CreerCompte= function (req, res) {
    models.Compte(req.body).save();
    res.json(req.body);
};
exports.RecupererComptes = function (req, res) {
    models.Compte.find(function(err, comptes) {
        if (err) {
            return console.error(err);         }
        res.json(comptes);
    }); };
exports.DeleteLivre = function (req, res) {
    var options = {Id: req.params.Id};
    models.Livre.find().remove(options).exec();
};
exports.DeleteCategorie = function (req, res) {
    var options = {Id: req.params.Id};
    models.Categorie.find().remove(options).exec();
};
exports.Login = function (req, res) {
    var options = {Email: req.body.Email, Password: req.body.Password};
    models.Compte.findOne(options,function(err, compte) {
        if (err) {
            return console.error(err);
        }
        if(!compte){
            return res.json(false);
        }
        req.session.user = compte;
        res.json(compte);
    });
};
exports.IsConnected = function (req, res) {
    if(!req.session.user){
        return res.json(false);
    }
    return res.json(true);
}
exports.Logout = function (req, res) {
    req.session.destroy();
    return res.status(200).send();
}
exports.IsConnected2 = function (req, res) {
    return true
}