/**
 * Created by Mohamed on 16/07/2016.
 */
var mongoose = require('./db.js').mongoose;
exports.schemaLivre = new mongoose.Schema({
    Id : Number,
    Nom: { type: String, maxlength: 50 },
    Auteur: String,
    Description: String,
    Langue: String,
    Prix: Number,
    ISBN: String,
    MaisonEdition: String,
    NombrePages: Number,
    Poids: String,
    Disponibilite: Boolean,
    DateSortie:Date,
    UrlImage: String,
    Categorie: String,
    Quantite: Number,
    DateDerniereCommande: { type: Date, default: Date.now }
} );
exports.schemaCategorie = new mongoose.Schema({
    Id : String,
    Libelle: String
} );
exports.schemaCompte = new mongoose.Schema({
    Sexe : String,
    Nom: String,
    Prenom: String,
    Email: String,
    Password: String
} )
