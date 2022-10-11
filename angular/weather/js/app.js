let app = new angular.module('weatherApp', [])

.controller('mainCtrl', function($scope) {
    $scope.title = 'Weather app'
    $scope.company = 'Microsoft'
    $scope.author = 'Gipsz Jakab'
    $scope.kategoriak = ['nap', 'eső', 'borult', 'jégeső', 'vihar', 'hó']
    $scope.ujadat = {}

    $scope.mindate = moment(new Date()).format('YYYY-MM-DD')

})