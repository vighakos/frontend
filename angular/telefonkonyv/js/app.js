let app = new angular.module('phoneBookApp', [])

.controller('mainCtrl', function($scope) {
    $scope.title = "loll xddd app"
    $scope.company = 'kompani'
    $scope.author = 'ololl author sttt'
    $scope.kategoriak = ['Család','Barát','Rokon','Munkatárs','Ismerős','Egyéb'];

    $scope.ujadat = {}

    $scope.adatok = angular.fromJson( window.localStorage.getItem('telefonkonyv'));
    
    if ($scope.adatok == null) $scope.adatok = []

    $scope.hozzaadas = function() {
        if ($scope.ujadat.nev == '' || $scope.ujadat.telszam == '' || $scope.ujadat.kategoria == '') {
            $scope.message = 'nem adatál minden adat'
        }
        $scope.adatok.push({
            nev:$scope.ujadat.nev,
            telszam:$scope.ujadat.telszam,
            kategoria:$scope.ujadat.kategoria
        })
        window.localStorage.setItem('telefonkonyv', angular.toJson($scope.adatok))
        $scope.ujadat = {}
    }
})