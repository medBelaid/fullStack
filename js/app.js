
var app = angular.module('appJeBouquine',['ngRoute','ngMessages','ui.grid','ui.bootstrap']);

app.config(function($routeProvider){
    
        $routeProvider.when('/Accueil', {templateUrl: "templates/Accueil.html",
                controller: 'AccueilControleur' })

        .when('/Authentification', {templateUrl: "templates/Authentification.html",
                controller: 'CompteControleur'})

        .when('/Inscription', {templateUrl: "templates/inscription.html",
                controller: 'registerCtrl'})

        .when('/Connexion', {templateUrl: "templates/login.html",
               controller: 'mainControleur'})

        .when('/BesoinAide', {templateUrl: "templates/BesoinAide.html",
                controller: 'BesoinAideControleur'})

        .when('/Contact', {templateUrl: "templates/Contact.html",
                controller: 'ContactControleur'})

        .when('/Detail/:Id', {templateUrl: "templates/Detail.html",
                controller: 'DetailControleur'})

        .when('/LesLivres/:Category?', {templateUrl: "templates/Livres.html",
                controller: 'LivresControleur'})

        .when('/Administration', {templateUrl: "templates/administration.html",
                controller: 'DashboardControleur'})

        .when('/Cart', {templateUrl: "templates/cart.html",
               controller: 'mainControleur'})

        .otherwise({
                redirectTo: '/Accueil'
        })
    ;
});

    