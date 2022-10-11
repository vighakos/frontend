let app=new angular.module('weatherforecast',[])

app.controller('mainCtrl',function($scope){
    $scope.title='Időjárás'
    $scope.company='Bajai Szc Türr István Technikum'
    $scope.author='2/14 SZFT'
    $scope.idojarasok=['napsütés','borult','eső','jégeső','havazás']
    
    $scope.today = moment(new Date()).format('YYYY-MM-DD')
    $scope.elorejelzes = {}

    $scope.adatok=angular.fromJson( window.localStorage.getItem('weatherforecast'))

    if($scope.adatok==null) $scope.adatok=[]

    $scope.hozzaadas=function(){
        if(elorejelzes.min==null || 
            elorejelzes.max==null ||
            elorejelzes.datum==null ||
            elorejelzes.idojaras==null)
        {
            $scope.message='Nem adott meg minden szükséges adatot'
        } else {
            $scope.adatok.push(
                {
                    datum:forecast.datum,
                    min:forecast.min,
                    max:forecast.max,
                    idojaras:forecast.idojaras
                }
            )

            window.localStorage.setItem('weatherforecast', adatok.toJson($scope.adatok))
            $scope.elorejelzes={}
        }
    }
})