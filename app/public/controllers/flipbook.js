app.controller('flipbookController',function($scope,$rootScope,progressService){
    $("#myProgress,#myBar").show();
    $rootScope.progress= progressService.flipbook;
     $scope.isclicked = false;
$scope.chat_image = "./assests/images/chat_flipbook.png";
$('.button').click(function(){
  $rootScope.progress= progressService.flipbookCont;
})


 });
