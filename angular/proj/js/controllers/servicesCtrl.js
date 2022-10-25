app.controller('servicesCtrl', function($scope) {
    $scope.services = [{
            name: 'Fűnyírás',
            price: '800',
            unit: 'Ft/m2'
        },
        {
            name: 'Talajművelés',
            price: '1500',
            unit: 'Ft/m2'
        },
        {
            name: 'Gyülölcsfa metszés',
            price: '200',
            unit: 'Ft/db'
        },
        {
            name: 'Műtrágyázás',
            price: '1200',
            unit: 'Ft/m2'
        },
        {
            name: 'Virágültetés',
            price: '550',
            unit: 'Ft/db'
        },
        {
            name: 'Permetezés',
            price: '5000',
            unit: 'Ft/alkalom'
        },
        {
            name: 'Locsolás',
            price: '1300',
            unit: 'Ft/alkalom'
        },
    ]
});