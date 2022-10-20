let app = new angular.module('peldaApp', ['ngAnimate']);

app.run(["$locale", function($locale) {
    $locale.NUMBER_FORMATS.GROUP_SEP = " ";
    $locale.NUMBER_FORMATS.DECIMAL_SEP = ",";
}])

app.controller('mainCtrl', function($scope) {
    $scope.hideInactive = false
    $scope.ujadat = {}

    $scope.adatok = angular.fromJson(window.localStorage.getItem('adatok'));
    if ($scope.adatok == null) {
        $scope.adatok = [{
                ID: 1,
                nev: "Kovács Béla",
                email: "kgbela@gmail.com",
                kor: 50,
                foglalkozas: "Kém",
                statusz: true
            },
            {
                ID: 2,
                nev: "Takács Tibor",
                email: "tt@gmail.com",
                kor: 33,
                foglalkozas: "Pék",
                statusz: true
            },
            {
                ID: 3,
                nev: "Horváth Éva",
                email: "he@gmail.com",
                kor: 23,
                foglalkozas: "Titkárnő",
                statusz: true
            },
            {
                ID: 4,
                nev: "Farkas István",
                email: "fi@gmail.com",
                kor: 65,
                foglalkozas: "Nyugdíjas",
                statusz: true
            },
            {
                ID: 5,
                nev: "Zoltán Géza",
                email: "zg@gmail.com",
                kor: 16,
                foglalkozas: "Tanuló",
                statusz: true
            }
        ];
    }

    $scope.hozzaadas = function() {
        if ($scope.ujadat.nev == null || $scope.ujadat.email == null || $scope.ujadat.kor == null || $scope.ujadat.foglalkozas == null) {
            $scope.message = 'Nem adtál meg minden adatot!'
        } else {
            $scope.adatok.push({ ID: $scope.adatok.length + 1, nev: $scope.ujadat.nev, email: $scope.ujadat.email, kor: $scope.ujadat.kor, foglalkozas: $scope.ujadat.foglalkozas, statusz: true });
            window.localStorage.setItem('adatok', angular.toJson($scope.adatok))
            $scope.ujadat = {}
        }
    }

    $scope.statusChange = function() {
        window.localStorage.setItem('adatok', angular.toJson($scope.adatok));
    }
})