angularApp.controller('MainCtrl', [ 
  '$scope',
  'SwapiService',
  function($scope, SwapiService){
    $scope.heading = "Angular Application";
    $scope.message = "This is me";
 
    SwapiService.people()
      .then(function(data) {
        $scope.data = data.data.results;
    }); 
 
  }
]);
