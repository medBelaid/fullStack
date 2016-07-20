'use strict';
app.factory('LivresService', function ($http) {
    var objLivres = {};
    objLivres.Livres = [];
    objLivres.RecupererLivres = function () {
        return $http({ url: "/Livres" });
    };
    objLivres.ChercherParId = function (id) {
        return $http({ url: "/Livre/"+id });
    };
    objLivres.ChercherParCategorie = function (categorie) {
        var livres = [];
        angular.forEach(this.Livres, function (item) {
            if (item.Categorie == categorie) {
                livres.push(item);   }
        });
        return livres;    };
    return objLivres; }); 