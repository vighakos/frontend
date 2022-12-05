app.controller('kosarCtrl', function($scope, $rootScope, DB) {
    $scope.tetelek = [];
    $scope.megvaltoztatando={};

    DB.select('cartDetails', 'userID', $rootScope.loggedUser.ID).then(function(res) {
        $scope.tetelek = res.data;
        $scope.summary = 0;
        $scope.tetelek.forEach(element => {
            $scope.summary += element.summary;
        });
    });

    $scope.delete = function(id) {
        if (confirm('Biztos törölni akarod?')) {
            DB.delete('carts', 'ID', id).then(function(res) {
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
            DB.delete('carts', 'userID', $scope.tetelek[0].userID).then(function(res) {
                $scope.tetelek = []
            })
        }
    }

    $scope.numberupdate=function(id){
        let idx = $scope.tetelek.findIndex(item => item.ID === id);
        let data = {
            ID:id,
            amount: $scope.megvaltoztatando.amount,
            userID:$scope.tetelek[idx].userID,
            pizzaID:$scope.tetelek[idx].pizzaID,
        }
        DB.update('carts', id, data).then(function(res) {
            alert('A kosárban lévő mennyiség frissítve!');
        });
    }

    $scope.ordering = function() {
        let data = {
            userID: $rootScope.loggedUser.ID,
            summary: $scope.summary
        }

        DB.insert('orders', data).then(function(res) {
            if (res.data.affectedRows != 0) {
                let orderID = res.data.insertId;

                $scope.tetelek.forEach(tetel => {
                    data = {
                        orderID: orderID,
                        pizzaID: tetel.pizzaID,
                        amount: tetel.amount,
                        price: tetel.price
                    }
                    DB.insert('orderItems', data);
                });

                DB.delete('carts', 'userID', $rootScope.loggedUser.ID).then(function() {
                    alert("A megrendelést rögzítettük!");
                    $scope.tetelek = [];
                    $scope.summary = 0;
                    $rootScope.itemsInCart = 0;
                });
            }
        });
    }
});