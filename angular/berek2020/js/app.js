let adatok = []
load()

let app = new angular.module('berekApp', [])

.controller('mainCtrl', function($scope) {
    $scope.berek = adatok
})

async function load() {
    let file = await getFile()
    
    file.forEach(line => {
        let sor = line.split(';')
        let object = {
            "nev": sor[0],
            "nem": sor[1],
            "reszleg": sor[2],
            "belepes": sor[3],
            "ber": sor[4],
        }
        adatok.push(object)
    })
}

async function getFile() {
    return await fetch('berek2020.txt')
    .then(res => res.text())
    .then(res => res.split('\n'))
}
