let app = new angular.module('peldaApp', [])

.controller('mainCtrl', function($scope) {
    $scope.title = 'elso hjk'
    $scope.company = 'türr'
    $scope.author = 'fiszfosz70'
    $scope.currency = 'Ft'

    $scope.links = [
        {
            name: 'Főoldal',
            url: '/home'
        },
        {
            name: 'Felhasználók',
            url: '/users'
        },
        {
            name: 'Referenciák',
            url: '/refs'
        },
        {
            name: 'Kapcoslar',
            url: '/contacts'
        }
    ]

    $scope.laptops = [
        {
            "ID": 1,
            "brand": "HP",
            "type": "650",
            "description": "serfgdfgsdfgwertwert",
            "price": 350000
        },
        {
            "ID": 2,
            "brand": "Lenovo",
            "type": "Thinkpad T410",
            "description": "Intel Core i5\r\n12GB RAM\r\n128GB SSD\r\nWindows 10 Pro\r\n",
            "price": 186000
        },
        {
            "ID": 3,
            "brand": "Acer",
            "type": "Travelmate 500",
            "description": "AMD Rysen 5, 8GB RAM, 512 GB SSD, Windows 10",
            "price": 195000
        },
        {
            "ID": 5,
            "brand": "Acerrrrrreeeee",
            "type": "Travelmate 5000000",
            "description": "AMD Rysen 5, 8GB RAM, 512 GB SSD, Windows 10",
            "price": 195000
        }
    ]

})
