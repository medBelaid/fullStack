/**
 * Created by Mohamed on 09/07/2016.
 */
'use strict';
app.controller('NodeControleur', ['$scope', '$routeParams', 'LivresService','$http',
    function($scope, $routeParams, LivresService,$http) {
    $scope.Livres = [];
    $scope.Categories = [];
    $scope.Langues = [{Langue:"Anglais"},{Langue:"Français"}];

    var RecupererLivres = function () {
        $http.get("/Livres").success(function(response){
            $scope.Livres = response;
            $scope.livre = "";
        });
    }
    var Recuperercategories = function () {
        $http.get("/Categories").success(function(response){
            $scope.Categories = response;
            $scope.Categorie = "";
        });
    }
    RecupererLivres();
    Recuperercategories();

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
                field : 'DateSortie',
                displayName : 'Date de Sortie'
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
}]);
