/**
 * Created by Mohamed on 09/07/2016.
 */
'use strict';
app.controller('DashboardControleur', ['$scope', '$routeParams', 'LivresService','$http',
    function($scope, $routeParams, LivresService,$http) {

//Menu height inherited document height
        $scope.widthDoc = $("#navbar").height();
        $scope.$watch('widthDoc', function (newVal, oldVal) {
            if($( document  ).width()>768){
                $("#navbar").height(0);
                $scope.widthDoc = $( document  ).height();
                $("#navbar").height( $scope.widthDoc);}
        });

    $scope.Livres = [];
    $scope.Categories = [];
    $scope.Comptes = [];
    $scope.categorie = "";
    $scope.livre = {Langue:"Français"};
    $scope.displayMode = "liv"
    $scope.setDisplayMode = function (mode) {
        $scope.displayMode = mode;
    }
    $scope.Langues = [{Langue:"Anglais"},{Langue:"Français"}];

    var RecupererLivres = function () {
        $http.get("/Livres").success(function(response){
            $scope.Livres = response;
            $scope.livre = {Langue:"Français"};
        });
    }
    var RecupererComptes = function () {
        $http.get("/Comptes").success(function(response){
            $scope.Comptes = response;
        });
    }
    var Recuperercategories = function () {
        $http.get("/Categories").success(function(response){
            $scope.Categories = response;
            console.log($scope.Categories[0]._id);
            $scope.Categorie = "";
        });
    }
    RecupererLivres();
    Recuperercategories();
    RecupererComptes();

    //*****************************Gestion de Livres**************************************************//
    $scope.EnregistrerLivre = function () {
        if (angular.isDefined($scope.livre.Id)) {
            $scope.UpdateLivre();
        } else {
            $scope.AjouterLivre();
        }
        $("html, body").animate({ scrollTop: 300 });
    }
    $scope.AjouterLivre = function () {
        if($scope.Livres.length >= 1){
           $scope.livre.Id = $scope.Livres[$scope.Livres.length - 1].Id + 1;
        }else{
           $scope.livre.Id = 1;
        }
        $http.post("/Livre/Creer", $scope.livre).success(function(r){
            RecupererLivres();
        });
    }
    $scope.SupprimerLivre = function(id){
        confirm('Êtes-vous sûr de bien vouloir supprimer cet élément?');
        $http.delete("/Livre/Delete/"+id).success(function(response){
            $scope.gridApi.core.refresh();
        });
        RecupererLivres();
    }
    $scope.editerLivre = function(row){
        $scope.livre = row.entity;
        $("html, body").animate({ scrollTop: 0 });
    }
    $scope.UpdateLivre = function () {
        $http.post("/Livre/Editer", $scope.livre).success(function(r){
            RecupererLivres();
        });
    }

    $scope.viderLivre = function () {
        $scope.livre = "";
    }

    var temp1 = '<div class="btn btn-danger btn-xs pull-right" style="margin:3px" ng-click="grid.appScope.SupprimerLivre(row.entity.Id)">'
        +'<i class="fa fa-times" aria-hidden="true"></i></div>'
        +'<div class="btn btn-info btn-xs pull-right" style="margin:3px" ng-click="grid.appScope.editerLivre(row)">'
        +'<i class="fa fa-pencil" aria-hidden="true"></i></div>';

    $scope.gridOptions = {
        data: 'Livres',
        enableFiltering: true,
        enableRowSelection: true,
        columnDefs : [
            {
                field : 'Id',
                displayName : 'ID',
                visible : false
            },
            {
                field : 'Nom',
                displayName : 'Nom'
            },
            {
                field : 'Auteur',
                displayName : 'Auteur'
            },
            {
                field : 'Prix',
                displayName : 'Prix'
            },
            {
                field : 'MaisonEdition',
                displayName : "Maison d'edition"
            },
            {
                field : 'NombrePages',
                displayName : 'NombrePages'
            },
            {
                field : 'Categorie',
                displayName : 'Categorie'
            },
            {
                field : 'Quantite',
                displayName : 'Quantite'
            },
            {
                field : 'Supprimer',
                displayName : 'Supprimer',
                cellTemplate: temp1
            }]
    };
    //*****************************Gestion de Categories**************************************************//
    $scope.EnregistrerCategorie = function () {
        if (angular.isDefined($scope.categorie._id)) {
            $scope.UpdateCategorie();
        } else {
            $scope.AjouterCategorie();
            $( "<li><a href='#/LesLivres/"+$scope.categorie.Id+"'>"+$scope.categorie.Libelle+"</a></li>" )
                .css("background-color", "rgb(50, 49, 50)").insertAfter( "#catMenu" );
        }
    }
    $scope.AjouterCategorie = function () {
        $http.post("/Categorie/Creer", $scope.categorie).success(function(r){
            Recuperercategories();
        });
    }
    $scope.UpdateCategorie = function () {
        $http.post("/Categorie/Editer", $scope.categorie).success(function(r){
            Recuperercategories();
        });
    }
    $scope.editerCategorie = function(index){
        console.log(index);
        $scope.categorie = $scope.Categories[index];
    }
    $scope.viderCategorie = function () {
        $scope.categorie = "";
    }
    $scope.SupprimerCategorie = function(index){
        var libelle = $scope.Categories[index].Libelle;
        var id = $scope.Categories[index].Id;
        confirm('Êtes-vous sûr de bien vouloir supprimer la catégorie '+libelle+'?');
        $http.delete("/Categorie/Delete/"+id).success(function(response){});
        Recuperercategories();
    }
}]);
