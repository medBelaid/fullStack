'use strict';
app.controller('mainControleur', [
    '$scope',
    'LivresService',
    'PanierService',
    '$routeParams',
    '$http',
    '$location',
    function($scope, LivresService, PanierService, $routeParams, $http, $location) {

    $scope.EstPanierVide = true;
    $scope.Panier = PanierService.Panier;

    //Active button in Menu
        $scope.isActive = function (path) {
        return $location.path() === path;
    }

    $scope.IsConnected = function () {
        $http.get("/IsConnected",$scope.Compte).success(function(r){
            console.log(r);
            //return r;
        })}
        //$scope.IsConnected();
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
    $scope.Categories = [];

    $scope.promise = LivresService.RecupererLivres()
        .success(function (data, status, headers, config) {
            $scope.Livres = data;
            LivresService.Livres = $scope.Livres;
            if ($routeParams.Category != null)
                $scope.Livres = LivresService.ChercherParCategorie($routeParams.Category);
        }).error(function (data, status, headers, config) {            });

    $http.get("/Categories").success(function(response){
        $scope.Categories = response;
        $scope.Categorie = "";
    });

    $scope.AjouterLivre = function(item)     {
        PanierService.AjouterLivre(item) ;
    }

    }]);


app.controller('AccueilControleur', ['$scope', function($scope) {
    ////Menu height inherited document height
    //$scope.widthDoc = $("#navbar").height();
    //$scope.$watch('widthDoc', function (newVal, oldVal) {
    //    if($( document  ).width()>768){
    //        $("#navbar").height(0);
    //        $scope.widthDoc = $( document  ).height();
    //        $("#navbar").height( $scope.widthDoc + 50);}
    //});

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


app.controller('LivresControleur', function ($scope, LivresService, PanierService, $routeParams, filterFilter) {
    $scope.Livres = [];

    //Menu height inherited document height
    $scope.widthDoc = $("#navbar").height();
    $scope.$watch('widthDoc', function (newVal, oldVal) {
        if($( document  ).width()>768){
            $("#navbar").height(0);
            $scope.widthDoc = $( document  ).height();
            $("#navbar").height( $scope.widthDoc);}
    });


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

    // create empty search model (object) to trigger $watch on update
    $scope.search = {};

    $scope.resetFilters = function () {
        // needs to be a function or it won't trigger a $watch
        $scope.search = {};
        $scope.MaxPrix = null;
    };

    // pagination controls
    $scope.currentPage = 1;
    $scope.totalItems = $scope.Livres.length;
    $scope.entryLimit = 6; // items per page
    $scope.maxSize = 2;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };
    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

    // $watch search to update pagination
    $scope.$watch('search', function (newVal, oldVal) {
        $scope.filtered = filterFilter($scope.Livres, newVal);
        $scope.totalItems = $scope.filtered.length;
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
        $scope.currentPage = 1;
    }, true);
});
