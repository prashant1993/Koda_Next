app.controller('lionDanceGoalCtrl',function($rootScope,$scope,progressService){

  $(document).ready(function () {

    $("#myProgress,#myBar").show();
    setTimeout(function(){
 $('#rowforChat,#back_button,#next_button,.danceVideo').show();
},1450);
});
$rootScope.progress= progressService.lionDance;
$scope.correctgifUrl="./assests/images/lionDanceOnce.gif";
$scope.wronggifUrl="./assests/images/wrong_dancing_lion.gif";
   $scope.isclicked = false;
   $(".button").click(function() {
   $rootScope.progress= progressService.lionDancecont;
});

});
