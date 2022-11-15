var app = new angular.module('vizsgaApp', [])

.controller('mainCtrl', function($scope) {
    $scope.title = "Vizsgajelentkezés"
    $scope.ize = "You have great ideas. When you need to protect them, call us, © 1996-2022 Daniel A. Tysver. All Rights Reserved. Forsgren Fisher McCalmont DeMarea Tysver LLP, Minneapolis, MN No claim to copyright ownership is made to underlying materials originating with the U.S. Government, including MPEP and TMEP sections and indexes, statutes, regulations, and court decisions. IMPORTANT: Please review the legal disclaimer and feedback page"
    $scope.cucc = "sxdcblé"
    $scope.users = [
        {
            id: 0,
            name: 'tanár',
            passwd: 'a'
        },
        {
            id: 1,
            name: 'diák1',
            passwd: 'b'
        },
        {
            id: 2,
            name: 'diák2',
            passwd: 'c'
        },
    ]
    $scope.subjects = ["magyar", "matek", "inform", "tantárgy", "tantárgy 34242"]
    $scope.ujvizsga = {}
    $scope.vizsgak = angular.fromJson(localStorage.getItem('vizsgak'));
    if ($scope.vizsgak == null) {
        $scope.vizsgak = [];
    }

    $scope.felvetel = function() {
        if ($scope.ujvizsga.subject == null || $scope.ujvizsga.date == null) {
            alert('Tölts ki minden mezőt 🙄')
        } else {
            $scope.vizsgak.push({
                id: $scope.vizsgak.length + 1,
                date: $scope.ujvizsga.date,
                subject: $scope.ujvizsga.subject,
                aktletszam: 0,
                maxletszam: $scope.ujvizsga.maxletszam
            })
            localStorage.setItem('vizsgak', angular.toJson($scope.vizsgak))
            alert('tantárgy felvéve :) 😊👍')
        }
    }

    $scope.torles = function(id) {
        let idx = $scope.vizsgak.findIndex(item => (item.id == id))
        $scope.vizsgak.splice(idx, 1)
        localStorage.setItem('vizsgak', angular.toJson($scope.vizsgak))
    }

    $scope.jelentkezes = function(id) {
        let idx = $scope.vizsgak.findIndex(item => (item.id == id))
        if ($scope.vizsgak[idx].aktletszam >= $scope.vizsgak[idx].maxletszam) {
            alert('Erre a vizsgára már nem lehet jelentkezni!!!!!!!!!!!!!!!!!')
            return
        }
        $scope.vizsgak[idx].aktletszam++
        localStorage.setItem('vizsgak', angular.toJson($scope.vizsgak))
    }
})