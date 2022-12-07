app.controller('rendelesCtrl', function($scope, $rootScope, DB) {
    $scope.tetelek = [];

    DB.select('orders', 'userID', $rootScope.loggedUser.ID).then(function(res) {
        $scope.tetelek = res.data;
    });

    $scope.cancel = function(id) {
        let idx = $scope.tetelek.findIndex(item => item.ID === id);
        if (confirm('Biztos törlöd ezt a rendelést?')) {
            DB.delete('orders', 'ID', id).then(function(res) {
                if (res.data.affectedRows != 0) {
                    let idx = $scope.tetelek.findIndex(item => item.ID === id);
                    $scope.tetelek.splice(idx, 1);
                } else {
                    alert('Váratlan hiba történt az adatbázis művelet során!');
                }
            })
        }
    }
});