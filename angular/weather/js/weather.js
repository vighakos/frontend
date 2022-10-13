let app=new angular.module('weatherforecast',[])

app.controller('mainCtrl',function($scope){
    $scope.title='Időjárás'
    $scope.company='Bajai Szc Türr István Technikum'
    $scope.author='2/14 SZFT'
    $scope.idojarasok=['napsütés','borult','eső','jégeső','havazás']
    $scope.elorejelzes = {}

    $scope.today = moment(new Date()).format('YYYY-MM-DD')
    $scope.adatok = angular.fromJson( window.localStorage.getItem('weatherforecast'))

    if($scope.adatok==null) $scope.adatok=[]

    $scope.hozzaadas=function(){
        if($scope.elorejelzes.datum==null ||
            $scope.elorejelzes.min==null || 
            $scope.elorejelzes.max==null ||
            $scope.elorejelzes.idojaras==null)
        {
            $scope.message='Nem adott meg minden szükséges adatot'
        } else {
            $scope.adatok.push(
                {
                    datum:moment($scope.elorejelzes.datum).format('LL'),
                    min:$scope.elorejelzes.min,
                    max:$scope.elorejelzes.max,
                    idojaras:$scope.elorejelzes.idojaras
                }
            )

            window.localStorage.setItem('weatherforecast', angular.toJson($scope.adatok))
            $scope.elorejelzes = {}
        }
    }

    $scope.torles = function(ID) {
        let idx = $scope.adatok.findIndex(item => item.ID == ID);
        $scope.adatok.splice(idx, 1);
        window.localStorage.setItem('weatherforecast', angular.toJson($scope.adatok))
    }
})