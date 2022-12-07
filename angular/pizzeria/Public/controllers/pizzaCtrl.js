app.controller('pizzaCtrl', function($scope, DB, $rootScope) {

    $scope.pizzak = [];
    $scope.pizza = {};
    $scope.db = [];

    DB.selectAll('pizzas').then(function(res) {
        $scope.pizzak = res.data;
        for (let i = 0; i < $scope.pizzak.length; i++) {
            $scope.db[i] = 1;
        }
    });

    $scope.newPizza = function() {
        $scope.modal = {
            Title: 'Új pizza felvétele',
            Btn: 'Felvesz',
            BtnColor: 'primary',
            mode: 0
        }
        $('#modalWindow').modal('show');
    }

    $scope.editPizza = function(id) {
        $scope.modal = {
            Title: 'Pizza módosítása',
            Btn: 'Módosít',
            BtnColor: 'warning',
            mode: 1,
            pizzaID: id
        }
        DB.select('pizzas', 'ID', id).then(function(res) {
            $scope.pizza = res.data[0];
            $('#modalWindow').modal('show');
        });
    }

    $scope.deletePizza = function(id) {
        $scope.modal = {
            Title: 'Pizza törlése',
            Btn: 'Töröl',
            BtnColor: 'danger',
            mode: 2,
            pizzaID: id
        }
        DB.select('pizzas', 'ID', id).then(function(res) {
            $scope.pizza = res.data[0];
            $('#modalWindow').modal('show');
        });
    }

    $scope.submit = function() {
        switch ($scope.modal.mode) {
            case 0:
                // INSERT
                {
                    if ($scope.pizza.name == null || $scope.pizza.price == null) {
                        alert("Nem adtál meg minden kötelező  adatot!");
                    } else {
                        DB.select('pizzas', 'name', $scope.pizza.name).then(function(res) {
                            if (res.data.length > 0) {
                                alert("Van már ilyen nevű pizza felvéve!");
                            } else {

                                let data = {
                                    name: $scope.pizza.name,
                                    price: $scope.pizza.price,
                                    kcal: $scope.pizza.kcal,
                                    description: $scope.pizza.description,
                                    filename: '' //TODO: képfeltöltés 	
                                }

                                DB.insert('pizzas', data).then(function(res) {
                                    if (res.data.affectedRows != 0) {
                                        alert('A pizza felvéve!');
                                        $scope.pizza.ID = res.data.insertId;
                                        $scope.pizzak.push($scope.pizza);
                                        $scope.pizza = {};
                                    } else {
                                        alert('Váratlan hiba történt az adatbázis művelet során!');
                                    }
                                });
                            }
                        });
                    }
                    break;
                }
            case 1:
                // UPDATE
                {
                    if ($scope.pizza.name == null || $scope.pizza.price == null) {
                        alert("Nem adtál meg minden kötelező  adatot!");
                    } else {
                        DB.select('pizzas', 'name', $scope.pizza.name).then(function(res) {
                            let modify = false;
                            if (res.data.length != 0) {
                                if (res.data[0].ID != $scope.modal.pizzaID) {
                                    alert('Van már ilyen nevű pizza felvéve!');
                                } else {
                                    modify = true;
                                }
                            } else {
                                modify = true;
                            }
                            if (modify) {
                                let data = {
                                    name: $scope.pizza.name,
                                    price: $scope.pizza.price,
                                    kcal: $scope.pizza.kcal,
                                    description: $scope.pizza.description,
                                    filename: '' //TODO: képfeltöltés 	
                                }
                                DB.update('pizzas', $scope.modal.pizzaID, data).then(function(res) {
                                    if (res.data.affectedRows != 0) {
                                        alert('A pizza módosítva!');
                                        let idx = $scope.pizzak.findIndex(item => item.ID === $scope.pizza.ID);
                                        $scope.pizzak[idx] = $scope.pizza;
                                        $scope.pizza = {};
                                        $('#modalWindow').modal('hide');
                                    } else {
                                        alert('Váratlan hiba történt az adatbázis művelet során!');
                                    }
                                });
                            }
                        });
                    }
                    break;
                }
            case 2:
                // DELETE
                {
                    DB.delete('pizzas', 'ID', $scope.modal.pizzaID).then(function(res) {
                        if (res.data.affectedRows != 0) {
                            alert('A pizza törölve!');
                            let idx = $scope.pizzak.findIndex(item => item.ID === $scope.pizza.ID);
                            $scope.pizzak.splice(idx, 1);
                            $scope.pizza = {};
                            $('#modalWindow').modal('hide');
                        } else {
                            alert('Váratlan hiba történt az adatbázis művelet során!');
                        }
                    });
                    break;
                }
        }
    }

    $scope.kosarba = function(idx) {
        let data = {
            userID: $rootScope.loggedUser.ID,
            pizzaID: $scope.pizzak[idx].ID,
            amount: $scope.db[idx]
        }
        DB.select('carts', 'userID', $rootScope.loggedUser.ID).then(function(res) {
            let vane = false;
            let cartID, aktdb = 0;
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].pizzaID == $scope.pizzak[idx].ID) {
                    vane = true;
                    cartID = res.data[i].ID;
                    aktdb = res.data[i].amount;
                    break;
                }
            }
            if (vane) {
                let data = {
                    amount: aktdb + $scope.db[idx]
                }
                DB.update('carts', cartID, data).then(function(res) {
                    alert('A kosárban lévő mennyiség frissítve!');
                });
            } else {
                DB.insert('carts', data).then(function(res) {
                    $rootScope.itemsInCart++;
                    alert('A tétel a kosárhoz adva!');
                });
            }
        });
    }
})