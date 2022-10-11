let app = new angular.module('shoppinglist', [])

.controller('mainCtrl', function($scope) {
    $scope.title = 'Shopping list'
    $scope.company = 'Bajai Szc Türr István Technikum'
    $scope.author = 'Vigh Ákos'

    $scope.currency = 'Ft'

    $scope.ujadat = {}

    $scope.adatok = angular.fromJson(window.localStorage.getItem('shoppinglist'));
    
    if ($scope.adatok == null) $scope.adatok = []

    $scope.hozzaadas = function() {
        if ($scope.ujadat.termek == null || $scope.ujadat.mennyiseg == null || $scope.ujadat.egysegar == null) {
            $scope.message = 'Nem adtál meg minden adatot!'
        } else {
            $scope.adatok.push({ ID: $scope.adatok.length + 1, termek: $scope.ujadat.termek, mennyiseg: $scope.ujadat.mennyiseg, egysegar: $scope.ujadat.egysegar });
            window.localStorage.setItem('shoppinglist', angular.toJson($scope.adatok))
            $scope.ujadat = {}
        }
        $scope.osszegez()
    }

    $scope.torles = function(ID) {
        let idx = $scope.adatok.findIndex(item => item.ID == ID);
        $scope.adatok.splice(idx, 1);
        window.localStorage.setItem('shoppinglist', angular.toJson($scope.adatok))
        $scope.osszegez()
    }

    $scope.osszegez = function() {
        let sum = 0
        $scope.adatok.forEach(item => {
            sum += item.mennyiseg * item.egysegar
        })
        return sum
    }
})