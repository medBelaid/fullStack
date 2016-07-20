'use strict';
app.service('CategoriesService', function ($http) {
    this.RecupererCategories = function () {
        return $http({ url: "/Categories" });
    };
    this.ChercherParId = function (id) {
        return $http({ url: "/Categorie/"+id });
    };
});