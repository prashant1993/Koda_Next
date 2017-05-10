app.controller('welcomeUserCtrl',function ($scope,$state) {
      console.log("entered in welcomeUserCtrl");
  $("#myProgress,#myBar").hide();
      $scope.clicked=function (){
        console.log("entered in welcomeUserCtrl click event");
        $state.go('welcome');
      };
});
