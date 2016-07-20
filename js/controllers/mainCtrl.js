'use strict';
app.controller('mainControleur', ['$scope','LivresService','PanierService','$routeParams', function($scope, LivresService, PanierService,$routeParams) {

    $scope.EstPanierVide = true;
    $scope.Panier = PanierService.Panier;
    $scope.NombresLivres = function(){
        var total = 0;
        var estPanierVide = true;
        angular.forEach(PanierService.Panier, function (item) {
            console.log('NombresLivres - s', item.Quantite);
            total += item.Quantite;
            $scope.EstPanierVide = false;});
        return total;         }
    $scope.CalculerMontantTotal = function(){
        var montatTotal = 0;
        angular.forEach(PanierService.Panier, function (item) {
            montatTotal += (item.Quantite * item.Prix);
            $scope.EstPanierVide = false;
        });
        return montatTotal;}
    $scope.SupprimerLivre = function(item){
        console.log("item", item);
        PanierService.SupprimerLivre(item);
    }

    $scope.Livres = [];
    $scope.promise = LivresService.RecupererLivres()
        .success(function (data, status, headers, config) {
            $scope.Livres = data;
            LivresService.Livres = $scope.Livres;
            if ($routeParams.Category != null)
                $scope.Livres = LivresService.ChercherParCategorie($routeParams.Category);
        }).error(function (data, status, headers, config) {            });
    $scope.AjouterLivre = function(item)     {
        PanierService.AjouterLivre(item) ;
    }

    }]);


app.controller('AccueilControleur', ['$scope', function($scope) {

}]);
app.controller('CompteControleur', ['$scope', function($scope) {

    $scope.Sexes = [
        { Code: 'H', Libelle: 'Homme' },
        { Code: 'F', Libelle: 'Femme' }];
    $scope.Compte = {Sexe: 'H',Nom: 'Belaid',Prenom: 'Mohamed',Email: 'medbbelaid@mail.com'}

    $scope.Valider = function () {
        alert($scope.Compte.Prenom + ' ' + $scope.Compte.Nom + '(' + $scope.Compte.Sexe + ')' + ' :' + $scope.Compte.Email);
    }
    $scope.Annuler = function () {}

}]);
app.controller('BesoinAideControleur', ['$scope', function($scope) {

}]);
app.controller('ContactControleur', ['$scope', function($scope) {

}]);
app.controller('DetailControleur', function ($scope, $routeParams, LivresService, PanierService) {

    LivresService.ChercherParId($routeParams.Id).success(function (data){
        $scope.Livre = data;
    });
    $scope.AjouterLivre = function (item) {
        PanierService.AjouterLivre(item);
    }
    $scope.activeTab = 1;
    $scope.setActiveTab = function(tabToSet){
        $scope.activeTab = tabToSet;
    }
});


app.controller('LivresControleur', function ($scope, LivresService, PanierService, $routeParams) {
    $scope.Livres = [];
    $scope.promise = LivresService.RecupererLivres()
        .success(function (data, status, headers, config) {
            $scope.Livres = data;
            LivresService.Livres = $scope.Livres;
            if ($routeParams.Category != null)
                $scope.Livres = LivresService.ChercherParCategorie($routeParams.Category);
        }).error(function (data, status, headers, config) {            });
    $scope.AjouterLivre = function(item)     {
        PanierService.AjouterLivre(item) ;
    }
});
