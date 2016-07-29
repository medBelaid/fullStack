/**
 * Created by Mohamed on 22/07/2016.
 */
app.controller('registerCtrl', function ($scope,$http) {

    $scope.registerForm = "";
    $scope.Sexes = [
        { Code: 'H', Libelle: 'Homme' },
        { Code: 'F', Libelle: 'Femme' }];
    $scope.Compte = {Sexe: 'H',Nom: '',Prenom: '',Email: '',Password:''};

    $scope.ajouterCompte = function () {
        $scope.Compte.Password = $.md5($scope.Compte.Password);
        $http.post("/Compte/Creer", $scope.Compte).success(function(r){
        });
        $scope.Compte = {Sexe: 'H',Nom: '',Prenom: '',Email: '',Password:''};
    }
    $scope.annulerCompte = function () {
        $scope.Compte = {Sexe: 'H',Nom: '',Prenom: '',Email: '',Password:''};
        $scope.registerForm.$setPristine();
    }
});
