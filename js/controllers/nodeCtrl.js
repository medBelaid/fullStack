/**
 * Created by Mohamed on 09/07/2016.
 */
'use strict';
app.controller('NodeControleur', ['$scope', '$routeParams', 'LivresService','$http', function($scope, $routeParams, LivresService,$http) {
    $scope.Livres = [];
    $scope.Categories = [];
    $scope.Langues = [{Langue:"Anglais"},{Langue:"Français"}];
    var getAllLivres = function () {
        $http.get("/Livres").success(function(response){
            console.log("i got all books");
            $scope.Livres = response;
            $scope.livre = "";
        });
    }
    var getAllcategories = function () {
        $http.get("/Categories").success(function(response){
            console.log("i got the all categories");
            $scope.Categories = response;
            $scope.Categorie = "";
            console.log($scope.Categories);
        });
    }
    getAllLivres();
    getAllcategories();

    $scope.saveBook = function () {
        if (angular.isDefined($scope.livre.Id)) {
            $scope.updateBook();
        } else {
            $scope.addBook();
        }
    }
    $scope.addBook = function () {
        if($scope.Livres.length >= 1){
           $scope.livre.Id = $scope.Livres[$scope.Livres.length - 1].Id + 1;
            console.log('length > 1');
        }else{
           $scope.livre.Id = 1;
            console.log('length 1');
        }
        console.log($scope.livre);
        $http.post("/Livre/Creer", $scope.livre).success(function(r){
                console.log(r.Prix);
                getAllLivres();
            }
    )};
    $scope.removeLivre = function(id){
        $http.delete("/Livre/Delete/"+id).success(function(response){
            console.log("i got the book with id: "+id);
        });
        getAllLivres();
    }

}]);
