app.controller('algorithmCtrl',function(){
  setTimeout(function() {
      $('#algo-chat').show();
  }, 3000);
  setTimeout(function () {
    $('.algorithm-action,.algorithm-list').show();
  },5000);
  $(document).ready(function(){
            setTimeout(function(){
              $('#step1').fadeIn(500);
            }, 7000);
            setTimeout(function(){
              $('#step2').fadeIn(500);
            }, 9000);
            setTimeout(function(){
              $('#step3').fadeIn(500);
            }, 11000);
            setTimeout(function(){
              $('#step4').fadeIn(500);
            }, 13000);
            setTimeout(function(){
              $('#step5').fadeIn(500);
            }, 15000);
            setTimeout(function(){
              $('#step6').fadeIn(500);
            }, 17000);
      });
})
