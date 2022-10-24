let app = new angular.module('kerteszet', ['ngRoute'])

app.run(function($rootScope) {
    $rootScope.title = 'AngularJS ngView példa'
    $rootScope.author = '2/45678 szoftverfejlesztő'
    $rootScope.company = 'Google'

    $rootScope.links = [
        {
            name: 'Bemutatkozás',
            url: '/home'
        },
        {
            name: 'Munkáink',
            url: '/refs'
        },
        {
            name: 'Termékek',
            url: '/products'
        },
        {
            name: 'Szolgáltatásaink',
            url: '/services'
        },
        {
            name: 'Kapcsolat',
            url: '/contacts'
        }
    ]
})

app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    })
    .when('/refs', {
        templateUrl: 'views/refs.html',
        controller: 'refsCtrl'
    })
    .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'productsCtrl'
    })
    .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'servicesCtrl'
    })
    .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'contactsCtrl'
    })
    .otherwise('/home')
})

app.controller('mainCtrl', function($scope) {

})