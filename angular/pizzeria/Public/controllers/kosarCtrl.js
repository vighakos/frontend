app.controller('kosarCtrl', function($scope, $rootScope, DB) {
    $scope.tetelek = [];

    DB.select('cartDetails', 'userID', $rootScope.loggedUser.ID).then(function(res) {
        $scope.tetelek = res.data;
        $scope.summary = 0;
        $scope.tetelek.forEach(element => {
            $scope.summary += element.summary;
        });
    });

    $scope.delete = function(id) {
        if (confirm('Biztos törölni akarod?')) {
            DB.delete('carts', id).then(function(res) {
                if (res.data.affectedRows != 0) {
                    let idx = $scope.tetelek.findIndex(item => item.ID === id);
                    $scope.tetelek.splice(idx, 1);
                } else {
                    alert('Váratlan hiba történt az adatbázis művelet során!');
                }
            })
        }
    }

    $scope.deleteall = function() {
        if ($scope.tetelek.length != 0 && confirm('Biztos törölni akarod az összes kosárban lévő terméket? 💀')) {
            DB.deleteByValue('carts', 'userID', $scope.tetelek[0].userID).then(function(res) {
                $scope.tetelek = []
            })
        }
    }

    $scope.apply = function(id){
        let idx = $scope.tetelek.findIndex(item => item.ID === id);

        let data = {
            ID:id,
            amount: $scope.semmi.amount,
            userID:$scope.tetelek[idx].userID,
            pizzaID:$scope.tetelek[idx].pizzaID
        }

        DB.update('carts', id, data).then(function(res) {
            alert('A kosárban lévő mennyiség frissítve!');
        });
    }
});