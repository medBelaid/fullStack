/**
 * Created by Mohamed on 09/07/2016.
 */
'use strict';
app.controller('NodeControleur', ['$scope', '$routeParams', 'LivresService','$http', function($scope, $routeParams, LivresService,$http) {
    $scope.Livres = [];
    $http.get("/livrelist").success(function(response){
        console.log("i got the data i requested");
        $scope.Livres = response;
    });

}]);
