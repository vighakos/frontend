var app = new angular.module('vizsgaApp', [])

.controller('mainCtrl', function($scope) {
    $scope.title = "Vizsgajelentkezés"
    $scope.felhasznalok = ['tanár', 'diák']
})