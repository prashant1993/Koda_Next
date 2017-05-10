app.controller('typesOfCharp3Ctrl',function($scope){
$('.disabled').prop('disabled', true);

setTimeout(function(){
  $('.disabled').prop('disabled', false);
  $('.disabled').removeClass('disabled');
},4000)
});
