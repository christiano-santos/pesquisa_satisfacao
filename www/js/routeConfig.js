angular.module("mod_pesquisa").config(function ($routeProvider){
    
    $routeProvider.when("/inicio", {
        templateUrl: "view/inicio_pesquisa.html"
    });
    $routeProvider.when("/pergunta1", {
        templateUrl: "view/pergunta1.html"
    });
    $routeProvider.when("/pergunta2", {
        templateUrl: "view/pergunta2.html"
    });
    $routeProvider.when("/pergunta3", {
        templateUrl: "view/pergunta3.html"
    });
    $routeProvider.when("/final", {
        templateUrl: "view/final.html"
    });
    $routeProvider.otherwise({redirectTo: "/inicio"});
});