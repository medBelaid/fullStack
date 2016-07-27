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
    $scope.login = function () {
        $scope.Compte.Password = $.md5($scope.Compte.Password);
        $http.post("/Login",$scope.Compte).success(function(r){
            if(!r){
                alert("login ou mot de passe incorrect");
            }
            else{
                $scope.User = {Nom: r.Nom, Prenom: r.Prenom };
               //$('#usernameMenu').html("Bonjour "+$scope.User.Nom+" "+$scope.User.Prenom);
               //$('#usernameMenu').css({"font-size": "20px", color: "#ff0b5c", "margin-top": "10px"});
            }
        });
        $scope.Compte = {Sexe: 'H',Nom: '',Prenom: '',Email: '',Password:''};
    }
});
