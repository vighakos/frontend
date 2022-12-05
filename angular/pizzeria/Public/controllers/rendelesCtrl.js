app.controller('rendelesCtrl', function($scope, $rootScope, DB) {
    $scope.tetelek = [];

    DB.select('orders', 'userID', $rootScope.loggedUser.ID).then(function(res) {
        $scope.tetelek = res.data;
    });
});