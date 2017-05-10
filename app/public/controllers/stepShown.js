app.controller('stepShownCtrl',function($rootScope,progressService){
      $("#myProgress,#myBar").show();
  $rootScope.progress= progressService.stepShown;
})
