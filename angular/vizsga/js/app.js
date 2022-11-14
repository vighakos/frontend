var app = new angular.module('vizsgaApp', [])

.controller('mainCtrl', function($scope) {
    $scope.title = "Vizsgajelentkezés"
    $scope.ize = "You have great ideas. When you need to protect them, call us, © 1996-2022 Daniel A. Tysver. All Rights Reserved. Forsgren Fisher McCalmont DeMarea Tysver LLP, Minneapolis, MN No claim to copyright ownership is made to underlying materials originating with the U.S. Government, including MPEP and TMEP sections and indexes, statutes, regulations, and court decisions. IMPORTANT: Please review the legal disclaimer and feedback page"
    $scope.cucc = "sxdcblé"
    $scope.loggedUser = {}
    $scope.currentUser = {}
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

    $scope.login = function(user) {
        if ($scope.currentUser.passwd != $scope.users.findIndex(item => user.id == $scope.currentUser.id)) {
            alert('nem jó')
        } else {
            $scope.loggedUser = {
                id: user.id,
                name: user.name,
                passwd: user.passwd
            }
            console.log(loggedUser);
        }
    }
    $scope.kattoloka = function() {
        console.log('tnatáűrrgy felvée :) 😊👍');    
    }
})