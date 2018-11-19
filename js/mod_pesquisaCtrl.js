angular.module("mod_pesquisa").controller("mod_pesquisaCtrl", function ($scope){
   $scope.pesquisa = {cpf: "", pergunta1: "", pergunta2: "", pergunta3: ""};

    $scope.resultadoPesquisa = function (cpf){
        $scope.pesquisa.cpf = (angular.copy(cpf));
   };
    $scope.perguntan1 = function (pergunta1){
        $scope.pesquisa.pergunta1 = (angular.copy(pergunta1));
    };
    $scope.perguntan2 = function (pergunta2){
        $scope.pesquisa.pergunta2 = (angular.copy(pergunta2));
    };
    $scope.perguntan3 = function (pergunta3){
        $scope.pesquisa.pergunta3 = (angular.copy(pergunta3));
    }; 
    
});