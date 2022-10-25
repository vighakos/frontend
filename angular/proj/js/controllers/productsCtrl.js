app.controller('productsCtrl', function($scope) {
    $scope.currency = 'Ft'
    $scope.products = [
        {
            name: 'Ásó',
            price: '800'
        },
        {
            name: 'Kapa',
            price: '1500'
        },
        {
            name: 'Csákány',
            price: '200'
        },
        {
            name: 'Műtrágya',
            price: '1200'
        },
        {
            name: 'Virágmag',
            price: '550'
        },
        {
            name: 'Permetezőke',
            price: '5000'
        },
        {
            name: 'Locsolóka',
            price: '1300'
        }
    ]
});