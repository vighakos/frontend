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
        DB.delete('carts', id).then(function(res) {
            if (res.data.affectedRows != 0) {
                let idx = $scope.tetelek.findIndex(item => item.ID === id);
                $scope.tetelek.splice(idx, 1);
            } else {
                alert('Váratlan hiba történt az adatbázis művelet során!');
            }
        })
    }

    $scope.deleteall = function() {
        $scope.tetelek.forEach(item => {
            DB.delete('carts', item.ID).then(function(res) {
                $scope.tetelek.splice(item.ID, 1);
            })
        })
    }

    $scope.apply=function(id){

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