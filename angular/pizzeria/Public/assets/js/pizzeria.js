let app = new angular.module('pizzeriaApp', ['ngRoute']);

app.run(function($rootScope, $locale, DB) {

    $locale.NUMBER_FORMATS.GROUP_SEP = ".";
    $locale.NUMBER_FORMATS.DECIMAL_SEP = ",";

    $rootScope.settings = {};
    $rootScope.loggedUser = {};
    $rootScope.settings.appTitle = 'MammaMia Pizzéria';
    $rootScope.settings.company = 'Bajai SZC Türr István Technikum';
    $rootScope.settings.author = '2/14.szft szoftverfejlesztő';
    $rootScope.penznem = 'Ft';
    $rootScope.decimals = 0;
    $rootScope.exch = 1;
    $rootScope.loggedUser = angular.fromJson(sessionStorage.getItem('pizzeriaApp'));

    if( $rootScope.loggedUser){
        DB.select('carts', 'userID', $rootScope.loggedUser.ID).then(function(res) {
            $rootScope.itemsInCart = res.data.length;
        });
    }

});

app.config(function($routeProvider) {
    $routeProvider
    // bárki számára
        .when('/', {
            templateUrl: 'views/pizzalista.html',
            controller: 'pizzaCtrl'
        })
        .when('/reg', {
            templateUrl: 'views/registration.html',
            controller: 'userCtrl'
        })
        // admin funkciók
        .when('/pizzak', {
            resolve: {
                function($rootScope, $location) {
                    if ($rootScope.loggedUser.rights != 'admin') {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'views/pizzak.html',
            controller: 'pizzaCtrl'
        })
        .when('/rendelesek', {
            resolve: {
                function($rootScope, $location) {
                    if ($rootScope.loggedUser.rights != 'admin') {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'views/rendelesek.html',
            controller: 'rendelesCtrl'
        })
        .when('/statisztika', {
            resolve: {
                function($rootScope, $location) {
                    if ($rootScope.loggedUser.rights != 'admin') {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'views/statisztika.html',
            controller: 'statisztikaCtrl'
        })
        // user funkciók
        .when('/kosar', {
            resolve: {
                function($rootScope, $location) {
                    if ($rootScope.loggedUser.rights != 'user' && $rootScope.loggedUser.rights != 'admin') {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'views/kosar.html',
            controller: 'kosarCtrl'
        })
        .when('/rendeleseim', {
            resolve: {
                function($rootScope, $location) {
                    if ($rootScope.loggedUser.rights != 'user' && $rootScope.loggedUser.rights != 'admin') {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'views/rendeleseim.html',
            controller: 'rendelesCtrl'
        })
        .otherwise('/')
});