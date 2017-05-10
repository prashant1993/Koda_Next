app.controller('typesOfCharp2Ctrl',function($scope){
$('.disabled').prop('disabled', true);

setTimeout(function(){
  $('.disabled').prop('disabled', false);
  $('.disabled').removeClass('disabled');
},6000)

});
