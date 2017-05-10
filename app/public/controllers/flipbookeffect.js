app.controller('flipeffectCtrl', function($scope,$rootScope,progressService,$state) {
    $("#myProgress,#myBar").show();
    $rootScope.progress= progressService.flipbookeffect;
    $scope.isclicked = false;
    $(document).ready(function() {
        $('#pause').hide();
        $('#mybook').booklet({
            width: 500,
            height: 250,
            closed: true,
            delay: 400,
            speed: 120,
            auto: true,
            // pause: '#pause',
            // play: '#play_button',
            pageNumbers: false,
             pagePadding: 0

        })
        // setTimeout(function() {
        //     $('#pause').click();
        //
        // }, 2000);
    });

    // $scope.play = function() {
    //     $('#mybook').booklet({
    //          pagePadding: 0,
    //         width: 500,
    //         height: 250,
    //         closed: true,
    //         delay: 250,
    //         speed: 80,
    //         auto: true,
    //         pause: '#pause',
    //         play: '#playButton',
    //         pageNumbers: false
    //
    //     })
    //     setTimeout(function() {
    //         $('#pause').click();
    //
    //     },2000);
    //
    // }

$scope.clicked=function (){
  $state.go('ninjaBadge');

  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      // elem.innerHTML = width * 1  + '%';
    }
  }

};
})
