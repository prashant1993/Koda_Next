app.controller('game2elementsCtrl', function($scope,$state) {
$('.disabled').prop('disabled',true);
  $('#next_button').css('animation','none');
  $('#display,.button,.disabled').css('filter','blur(5px)');
setTimeout(function(){
  $('#display,#back_button,#next_button').css('filter','blur(0px)')
},2500)


$scope.count = 0;
$scope.moveCap = function() {
      $scope.isCap = true;
        $('#cap').css("opacity", "0.5");
        $('#capPlaced').show();
         $scope.count++;
         console.log($scope.count);
         if($scope.count>1){
           $('#errorMsgCap').show();
           setTimeout(function(){
             $('#errorMsgCap').hide();
           },1000);
         }
    }


$scope.moveApple = function() {
    if($scope.isCap ){
     $scope.isApple = true;
       $('#apple').css("opacity", "0.5");
       $('#applePlaced').show();
     }else{
       $('#errorMsgApple').show();
       setTimeout(function(){
         $('#errorMsgApple').hide();
       },1000);
     }
   }

   $scope.moveMonkey = function() {
       if($scope.isCap ){
    $scope.isMonkey = true;
      $('#monkey').css("opacity", "0.5");
      $('.cap').hide();
      $('#monkeyPlaced').show();
    }else{
      $('#errorMsgMonkey').show();
      setTimeout(function(){
        $('#errorMsgMonkey').hide();
      },1000);
    }
  }
  $scope.moveBg = function() {
    if($scope.isCap  && $scope.isApple  && $scope.isCap ){
   $scope.isBg = true;
     $('.chat_monkey').hide();
     $('#bgPlaced').show();
   }else{
     $('#errorMsgBg').show();
     setTimeout(function(){
       $('#errorMsgBg').hide();
     },1000);
   }
 }
    $scope.scoringRule = function() {
        $scope.isScoringRule = true;
        $('.chat_bg').hide();
        $('#scoringRule').css("opacity", "0.5");

    }
    $scope.gameOverRule = function() {
      if($scope.isScoringRule){
        $scope.isgameOverRule = true;
          $state.go('game2elementsNext');
            $('.disabled').removeClass('disabled');
      }else{
        $('#errorMsgRule1').show();
        setTimeout(function(){
          $('#errorMsgRule1').hide();
        },1000);
      }
    }

$scope.rule2=function(){
if($scope.isScoringRule){
  $('#errorMsg2').show();
  setTimeout(function(){
    $('#errorMsg2').hide();
  },1000);
}else {
  $('#errorMsgRule2').show();
  setTimeout(function(){
    $('#errorMsgRule2').hide();
  },1000);
}
}

$scope.rule4=function(){
  if($scope.isScoringRule){
  $('#errorMsg4').show();
  setTimeout(function(){
    $('#errorMsg4').hide();
  },1000);
}else{
  $('#errorMsgRule4').show();
  setTimeout(function(){
    $('#errorMsgRule4').hide();
  },1000);
}
}

$scope.rule5=function(){
    if($scope.isScoringRule){
  $('#errorMsg5').show();
  setTimeout(function(){
    $('#errorMsg5').hide();
  },1000);
}else{
  $('#errorMsgRule5').show();
  setTimeout(function(){
    $('#errorMsgRule5').hide();
  },1000);
}
}

setTimeout(function(){
  $('.chat').show();
},1500)
})
