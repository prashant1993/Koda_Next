app.controller('flipanimateCtrl',function($scope,$state){
 $scope.clicked=function(){
  $state.go('flipeffect');
 }
});
