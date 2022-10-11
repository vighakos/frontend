let app = new angular.module('phoneBookApp', []);

app.controller('mainCtrl', function($scope) {
    $scope.title = 'Telefonkönyv App';
    $scope.company = 'Bajai SZC Türr István Technikum';
    $scope.author = '2/14.szft Szoftverfejlesztő';
    $scope.kategoriak = ['Család', 'Barát', 'Rokon', 'Munkatárs', 'Ismerős', 'Egyéb'];
    $scope.ujadat = {};

    $scope.adatok = angular.fromJson(window.localStorage.getItem('telefonkonyv'));
    if ($scope.adatok == null) {
        $scope.adatok = [];
    }

    $scope.hozzaadas = function() {
        if ($scope.ujadat.nev == null || $scope.ujadat.telszam == null || $scope.ujadat.kategoria == null) {
            $scope.message = 'Nem adtál meg minden adatot!';
        } else {
            $scope.adatok.push({ ID: $scope.adatok.length + 1, nev: $scope.ujadat.nev, telszam: $scope.ujadat.telszam, kategoria: $scope.ujadat.kategoria });
            window.localStorage.setItem('telefonkonyv', angular.toJson($scope.adatok));
            $scope.ujadat = {};
        }
    }

    $scope.torles = function(ID) {
        let idx = $scope.adatok.findIndex(item => item.ID == ID);
        $scope.adatok.splice(idx, 1);
        window.localStorage.setItem('telefonkonyv', angular.toJson($scope.adatok));
    }

});