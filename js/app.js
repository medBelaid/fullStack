
var app = angular.module('appJeBouquine',['ngRoute','ngMessages']);

app.config(function($routeProvider){
    
        $routeProvider.when('/Accueil', {templateUrl: "templates/Accueil.html",
                controller: 'AccueilControleur' })

        .when('/Authentification', {templateUrl: "templates/Authentification.html",
                controller: 'CompteControleur'})

        .when('/BesoinAide', {templateUrl: "templates/BesoinAide.html",
                controller: 'BesoinAideControleur'})

        .when('/Contact', {templateUrl: "templates/Contact.html",
                controller: 'ContactControleur'})

        .when('/Detail/:Id', {templateUrl: "templates/Detail.html",
                controller: 'DetailControleur'})

        .when('/LesLivres/:Category?', {templateUrl: "templates/Livres.html",
                controller: 'LivresControleur'})
        
        .otherwise({
                    redirectTo: '/Accueil'
            })
    ;
});

    